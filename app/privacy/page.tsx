import Link from 'next/link'
import { COMPANY_CONTACT } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Website Privacy & Cookies | Pro-Motion', 'Learn about optional website analytics, cookie choices and external services on the Pro-Motion Physiotherapy website.', '/privacy')

export default function PrivacyPage() {
  return <main className="mx-auto max-w-3xl px-5 pb-20 pt-40 text-gray-900">
    <p className="text-sm font-semibold text-[#c8101e]">Pro-Motion Physiotherapy</p>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Website privacy &amp; cookies</h1>
    <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-a:text-[#c8101e]">
      <p>This notice explains the website’s analytics and cookie controls. It does not replace the information and consent provided when you arrange or receive clinical care.</p>
      <h2>Your cookie choice</h2>
      <p>Optional analytics are off until you select “Accept analytics”. Selecting “Reject optional” lets you continue browsing and access booking links without loading these analytics tools. Use “Cookie settings” in the footer to change your choice.</p>
      <p>We store your choice in your browser’s local storage for up to 180 days. This storage remembers your preference; it is not used for analytics. If browser storage is blocked, your choice may need to be made again on your next visit.</p>
      <h2>Optional analytics</h2>
      <p>When you accept, Google Analytics and Datafast receive information about visits and interactions, such as pages viewed, browser and device information, referral information, and network information including your IP address. They may use cookies or similar identifiers to measure website use. Provider processing may occur outside Canada.</p>
      <p>Learn more in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google privacy policy</a> and <a href="https://datafa.st/privacy" target="_blank" rel="noopener noreferrer">Datafast privacy policy</a>.</p>
      <p>Withdrawing analytics consent reloads this page to stop the loaded analytics tools and removes accessible analytics cookies set at the website root. Withdrawal stops future collection through these tools; it does not erase information already received by a provider.</p>
      <h2>Maps and external booking</h2>
      <p>The footer map connects to Google only after you select “Load Google map”. Loading it may share your IP address and browser information with Google and allow Google cookies. You can also use the directions link to open Google Maps separately.</p>
      <p>Online booking opens the Juvonno portal. External booking, map and social websites have their own privacy practices and cookie controls. Your analytics choice here does not control those websites.</p>
      <h2>Clinic chat</h2>
      <p>The website also provides a clinic chat service supplied through RTSTICS. The analytics buttons control Google Analytics and Datafast; they do not control information you send through chat. Avoid sharing sensitive medical details in chat and contact the clinic for an appropriate way to discuss your care.</p>
      <h2>Contacting the clinic</h2>
      <p>If you send an appointment request, the details you submit are used to respond to your request. Avoid including sensitive medical details in general website messages. Contact the clinic for questions about personal information, clinical records, or appropriate ways to share health information.</p>
      <p>Email <a href={`mailto:${COMPANY_CONTACT.EMAIL}`}>{COMPANY_CONTACT.EMAIL}</a> or call <a href={`tel:${COMPANY_CONTACT.PHONE}`}>{COMPANY_CONTACT.PHONE_DISPLAY}</a>.</p>
      <p><Link href="/">Return to the website</Link></p>
    </div>
  </main>
}
