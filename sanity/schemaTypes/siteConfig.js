// schemas/siteConfig.js

export default {
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Disables "create" and "delete" actions
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'domain',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Site Configuration',
        subtitle: subtitle ? `Domain: ${subtitle}` : '',
      }
    },
  },
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'The name of the website or business.',
    },
    {
      name: 'domain',
      title: 'Domain Name',
      type: 'string',
      description: 'The website domain (e.g., example.com).',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'The official name of the company.',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Contact phone number for the business.',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'General contact email address for the business.',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
        },
        {
          name: 'zip',
          title: 'ZIP Code',
          type: 'string',
        },
      ],
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}
