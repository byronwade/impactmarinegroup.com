export default {
  name: 'fleet',
  title: 'Fleet Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'boats',
      title: 'Featured Boats',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'boat'}],
        },
      ],
    },
  ],
}
