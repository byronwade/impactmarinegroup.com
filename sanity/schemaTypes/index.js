// schemas/index.js
import {defineType} from 'sanity'
import siteConfig from './siteConfig' // Import the siteConfig schema
import boat from './boat'
import menu from './menu'
import page from './page'
import landingPage from './landingPage'
import hero from './components/hero'
import textWithImage from './components/textWithImage'
import callToAction from './components/callToAction'
import testimonial from './components/testimonial'
import featuredProducts from './components/featuredProducts'
import accordion from './components/accordion'
import featuredBrands from './components/featuredBrands'
import fleet from './components/fleet'
import services from './components/services'
import instagramFeed from './components/instagram'
import testimonialSection from './components/testimonials'

export const schemaTypes = [
  // Existing schemas...

  siteConfig, // Add siteConfig to the schemaTypes array
  boat,
  menu,
  page,
  landingPage,
  hero,
  textWithImage,
  callToAction,
  testimonial,
  featuredProducts,
  accordion,
  featuredBrands,
  fleet,
  services,
  instagramFeed,
  testimonialSection,

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
]
