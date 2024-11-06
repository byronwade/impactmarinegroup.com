export default {
  name: 'instagramFeed',
  title: 'Instagram Feed',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'displayCount',
      title: 'Number of Posts to Display',
      type: 'number',
      initialValue: 6,
    },
  ],
}
