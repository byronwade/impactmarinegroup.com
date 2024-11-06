export default {
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
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Author Role',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Author Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
