// deskStructure.js
import {structureTool} from 'sanity/structure'

export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .child(S.editor().id('siteConfig').schemaType('siteConfig').documentId('siteConfig')),

      S.divider(),

      // Content
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Blog Posts')
                .schemaType('blogPost')
                .child(S.documentTypeList('blogPost')),
              S.listItem().title('Pages').schemaType('page').child(S.documentTypeList('page')),
            ]),
        ),

      S.divider(),

      // Products & Services
      S.listItem()
        .title('Products & Services')
        .child(
          S.list()
            .title('Products & Services')
            .items([
              S.listItem().title('Boats').schemaType('boat').child(S.documentTypeList('boat')),
              S.listItem()
                .title('Services')
                .schemaType('service')
                .child(S.documentTypeList('service')),
            ]),
        ),

      S.divider(),

      // Menus - Simplified
      S.documentTypeListItem('menu').title('Menus'),

      S.divider(),
    ])
