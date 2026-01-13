import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { projectId, dataset } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  // 移除 basePath，回歸官方默認行為：一進去就是後台
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
