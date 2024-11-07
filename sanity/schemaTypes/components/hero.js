export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundVideo',
      title: 'Background Video (Optional)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'primaryCta',
      title: 'Primary Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
        {
          name: 'icon',
          title: 'Button Icon',
          type: 'string',
          options: {
            list: [
              {title: 'Calendar', value: 'calendar'},
              {title: 'Phone', value: 'phone'},
              {title: 'Arrow', value: 'arrow'},
            ],
          },
        },
      ],
    },
    {
      name: 'secondaryCta',
      title: 'Secondary Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
      ],
    },
    {
      name: 'rating',
      title: 'Rating Badge',
      type: 'object',
      fields: [
        {
          name: 'show',
          title: 'Show Rating',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'value',
          title: 'Rating Value',
          type: 'string',
          hidden: ({parent}) => !parent?.show,
        },
      ],
    },
  ],
}
