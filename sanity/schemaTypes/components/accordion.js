export default {
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Accordion Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'accordionItem',
          title: 'Accordion Item',
          fields: [
            {
              name: 'trigger',
              title: 'Trigger Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                  ],
                  lists: [{title: 'Bullet', value: 'bullet'}],
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                    ],
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'trigger',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'items.0.trigger',
    },
    prepare({title}) {
      return {
        title: 'Accordion',
        subtitle: title ? `First item: ${title}` : 'No items added',
      }
    },
  },
}
