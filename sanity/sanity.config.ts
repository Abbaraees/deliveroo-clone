import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'deliveroo-clone',

  projectId: '0r0ytgya',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
