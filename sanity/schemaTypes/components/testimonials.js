export default {
  name: 'testimonialSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'What Our Customers Say',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Customer Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).max(5),
            },
          ],
        },
      ],
    },
  ],
}
