export default {
  name: 'boat',
  title: 'Boats',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Boat Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.modelYear}-${doc.manufacturer}-${doc.model}-${doc.trim || ''}`,
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .slice(0, 200),
        isUnique: async (slug, context) => {
          const {document, getClient} = context
          const client = getClient({apiVersion: '2024-03-21'})
          const id = document._id.replace(/^drafts\./, '')
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
          }
          const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`
          return await client.fetch(query, params)
        },
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'trim',
      title: 'Trim',
      type: 'string',
    },
    {
      name: 'modelYear',
      title: 'Model Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'stockNumber',
      title: 'Stock Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: ['NEW', 'USED'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Available', 'Sale Pending', 'Sold'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'listPrice',
      title: 'List Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        {
          name: 'length',
          title: 'Length (LOA)',
          type: 'string',
        },
        {
          name: 'capacity',
          title: 'Capacity',
          type: 'string',
        },
        {
          name: 'dryWeight',
          title: 'Dry Weight',
          type: 'string',
        },
        {
          name: 'speed',
          title: 'Top Speed',
          type: 'string',
        },
      ],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
