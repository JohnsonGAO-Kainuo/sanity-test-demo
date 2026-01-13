import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { projectId, dataset } from './sanity/env'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // 使用結構化工具 (structureTool) 是 Sanity v3 的標準做法
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
