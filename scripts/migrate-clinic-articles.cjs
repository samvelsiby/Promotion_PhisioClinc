// One-time migration. Run with --apply only after reviewing the dry-run output.
// Uses the user's existing Sanity CLI session; never writes or prints its token.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const {createClient} = require('@sanity/client');
const articles = require('../docs/migrations/clinic-articles-2026-09-20.json');
const root=path.resolve(__dirname,'..');
const token=JSON.parse(fs.readFileSync(path.join(require('node:os').homedir(),'.config/sanity/config.json'),'utf8')).authToken;
if(!token) throw new Error('Sign into Sanity CLI before migrating.');
const client=createClient({projectId:'o1vrge91',dataset:'production',apiVersion:'2023-10-01',useCdn:false,token,perspective:'raw'});
function block(text,style='normal',href) {
 const key=crypto.randomUUID().replaceAll('-','');
 return {_type:'block',_key:key,style,markDefs:href?[{_type:'link',_key:'link',href}]:[],children:[{_type:'span',_key:key+'s',text,marks:href?['link']:[]}]};
}
function body(a) {
 return [block('By Pro Motion Physiotherapy · Patient information'),
 ...a.sections.flatMap(s=>[block(s.heading,'h2'),...s.paragraphs.map(p=>block(p))]),
 block('Sources and further information','h2'),...a.sources.map(s=>block(s.title,'normal',s.url)),
 block('General appointment information, not an individual assessment or a guarantee of insurance coverage. Confirm current arrangements with the clinic and your insurer.')];
}
async function main(){
 const original=await client.fetch('*[_type == "post"]');
 const collisions=original.filter(d=>articles.some(a=>a.slug===d.slug?.current));
 assert.equal(collisions.length,0,'Existing documents share migration slugs. Stop to review rather than overwrite.');
 console.log('Existing documents:',original.length,'New documents:',articles.length);
 if(!process.argv.includes('--apply')) {console.log('Dry run passed. No remote changes.');return;}
 const backup=path.join('/private/tmp','promotion-sanity-before-migration.json');
 fs.writeFileSync(backup,JSON.stringify(original,null,2),{mode:0o600});
 const documents=[];
 for(const a of articles){
  const document={_id:a._id,_type:'post',title:a.title,slug:{_type:'slug',current:a.slug},excerpt:a.excerpt,tag:a.tag,readTime:a.readTime,publishedAt:a.publishedAt.length===10?a.publishedAt+'T00:00:00.000Z':a.publishedAt,body:body(a),relatedLinks:a.relatedLinks.map((l,i)=>({_key:'link'+i,_type:'object',...l}))};
  if(a.mainImageUrl){
   assert(a.mainImageUrl.startsWith('/images/blog/'));
   const file=path.join(root,'public',a.mainImageUrl);
   const buffer=fs.readFileSync(file),sha1=crypto.createHash('sha1').update(buffer).digest('hex');
   let asset=await client.fetch('*[_type=="sanity.imageAsset" && sha1==$sha1][0]',{sha1});
   if(!asset)asset=await client.assets.upload('image',buffer,{filename:path.basename(file),contentType:'image/webp'});
   document.mainImage={_type:'image',asset:{_type:'reference',_ref:asset._id},alt:a.mainImageAlt};
  }
  documents.push(document);
 }
 // create() fails atomically on any conflicting ID; it never overwrites an existing post.
 let transaction=client.transaction();for(const d of documents)transaction=transaction.create(d);
 await transaction.commit({visibility:'sync'});
 const after=await client.fetch('*[_type=="post"]');
 for(const old of original)assert.equal(after.find(d=>d._id===old._id)?._rev,old._rev,'Existing post changed');
 for(const expected of documents){
  const actual=after.find(d=>d._id===expected._id);assert(actual);
  for(const [k,v] of Object.entries(expected))assert.deepEqual(actual[k],v,'Mismatch: '+expected._id+' '+k);
 }
 assert.equal(after.length,original.length+articles.length);
 console.log('Verified:',documents.length,'migrated articles; all prior documents unchanged; total',after.length);
}
main().catch(e=>{console.error(e.message);process.exitCode=1});
