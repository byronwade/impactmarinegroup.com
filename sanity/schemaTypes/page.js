export default {
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
        {type: 'textWithImage'},
        {type: 'callToAction'},
        {type: 'testimonial'},
        {type: 'featuredProducts'},
        {type: 'accordion'},
        {type: 'hero'},
        {type: 'featuredBrands'},
        {type: 'fleet'},
        {type: 'services'},
        {type: 'instagramFeed'},
        {type: 'testimonialSection'},
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
  ],
}
