import { defineField, defineType } from 'sanity'
import { postType } from './postType'

// 為了簡潔，我們直接在這裡定義 Page 和 Project 模型，不再分開文件
const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'content', type: 'array', of: [{ type: 'block' }] }),
  ],
})

const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', type: 'text' }),
  ],
})

export const schemaTypes = [pageType, projectType, postType]
