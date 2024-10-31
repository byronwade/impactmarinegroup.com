import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import deskStructure from './schemaTypes/deskStructure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'impactmarinegroup.com',

  projectId: 'f9jkdh97',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    media({
      // Plugin options (optional)
      assetSources: ['sanity-default'], // default asset sources
      defaultLayout: 'grid', // 'grid' | 'list'
      defaultViewMode: 'card', // 'card' | 'metadata'
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
