// schemas/index.js
import {defineType} from 'sanity'
import siteConfig from './siteConfig' // Import the siteConfig schema
import boat from './boat'
export const schemaTypes = [
  // Existing schemas...

  siteConfig, // Add siteConfig to the schemaTypes array
  boat,

  // Services Schema
  defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Service Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Service Image',
        type: 'image',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: [
          {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
          },
          {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
          },
          {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{type: 'string'}],
          },
        ],
      },
    ],
  }),

  // Blog Post Schema
  defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: [
          {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
          },
          {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
          },
          {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{type: 'string'}],
          },
        ],
      },
    ],
  }),
  // Menu Schema
  defineType({
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Menu Name',
        type: 'string',
      },
      {
        name: 'items',
        title: 'Menu Items',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'page'}, {type: 'boat'}, {type: 'service'}],
          },
          {
            type: 'object',
            name: 'customLink',
            title: 'Custom Link',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }),
  // Block Content Schema
  defineType({
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'Quote', value: 'blockquote'},
        ],
        lists: [{title: 'Bullet', value: 'bullet'}],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
          ],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'URL',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                },
              ],
            },
          ],
        },
      },
      {
        type: 'image',
        options: {hotspot: true},
      },
    ],
  }),

  // Landing Page Schema
  defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'sections',
        title: 'Page Sections',
        type: 'array',
        of: [
          {type: 'hero'},
          {type: 'textWithImage'},
          {type: 'callToAction'},
          {type: 'testimonial'},
          {type: 'featuredProducts'},
        ],
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: [
          {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
          },
          {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
          },
          {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{type: 'string'}],
          },
        ],
      },
    ],
  }),

  // Hero Section
  defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'tagline',
        title: 'Tagline',
        type: 'text',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }),

  // Text with Image Section
  defineType({
    name: 'textWithImage',
    title: 'Text with Image',
    type: 'object',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imagePosition',
        title: 'Image Position',
        type: 'string',
        options: {
          list: [
            {title: 'Left', value: 'left'},
            {title: 'Right', value: 'right'},
          ],
          layout: 'radio',
        },
      },
    ],
  }),

  // Call to Action Section
  defineType({
    name: 'callToAction',
    title: 'Call to Action',
    type: 'object',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
      {
        name: 'buttonLink',
        title: 'Button Link',
        type: 'url',
      },
    ],
  }),

  // Testimonial Section
  defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
      {
        name: 'quote',
        title: 'Quote',
        type: 'text',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'authorImage',
        title: 'Author Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }),

  // Featured Products Section
  defineType({
    name: 'featuredProducts',
    title: 'Featured Products',
    type: 'object',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'boat'}],
          },
        ],
      },
    ],
  }),

  // Page Schema
  defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'isHomePage',
        title: 'Is Home Page',
        type: 'boolean',
        description: 'Set this to true for the home page',
      },
      {
        name: 'content',
        title: 'Page Content',
        type: 'array',
        of: [
          {type: 'hero'},
          {type: 'textWithImage'},
          {type: 'callToAction'},
          {type: 'testimonial'},
          {type: 'featuredProducts'},
          {
            type: 'object',
            name: 'customComponent',
            title: 'Custom Component',
            fields: [
              {
                name: 'componentName',
                title: 'Component Name',
                type: 'string',
              },
              {
                name: 'props',
                title: 'Component Props',
                type: 'object',
                fields: [
                  {
                    name: 'key',
                    type: 'string',
                    title: 'Key',
                  },
                  {
                    name: 'value',
                    type: 'string',
                    title: 'Value',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'object',
        fields: [
          {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
          },
          {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
          },
          {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{type: 'string'}],
          },
        ],
      },
      {
        name: 'order',
        title: 'Menu Order',
        type: 'number',
        description: 'Order of the page in the main menu (lower numbers appear first)',
        validation: (Rule) => Rule.required().min(0),
      },
    ],
  }),
]
