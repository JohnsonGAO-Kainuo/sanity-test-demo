import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { projectId, dataset } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
