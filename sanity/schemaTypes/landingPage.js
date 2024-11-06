export default {
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
        {type: 'accordion'},
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
          type: 'string',
        },
      ],
    },
  ],
}
