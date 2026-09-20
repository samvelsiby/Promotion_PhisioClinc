import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Short description for accessibility and SEO.',
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{
        type: 'block',
      }],
      description: 'Main blog content. Use headings, lists, and formatting as needed.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Category / Tag',
      type: 'string',
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
      description: 'Example: 5 min read',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'relatedLinks',
      title: 'Related services and next steps',
      type: 'array',
      description: 'Links shown below the article. Service links also connect this guide to its service page.',
      of: [{
        type: 'object',
        fields: [
          {name: 'label', title: 'Link label', type: 'string', validation: (rule) => rule.required()},
          {name: 'href', title: 'Link URL', type: 'url', validation: (rule) => rule.required().uri({allowRelative: true, scheme: ['https', 'http', 'mailto', 'tel']})},
        ],
      }],
    }),
  ],
  orderings: [{title: 'Newest published first', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]}],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
    },
  },
})
