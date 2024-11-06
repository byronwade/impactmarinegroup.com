export default {
  name: 'featuredBrands',
  title: 'Featured Brands',
  type: 'object',
  fields: [
    {
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Brand Name',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Brand Logo',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
