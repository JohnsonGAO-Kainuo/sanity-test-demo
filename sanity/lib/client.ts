import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // 設為 false 確保獲取最新內容，不使用 CDN 緩存
  perspective: 'published', // 只獲取已發布的內容
})

// 用於預覽模式的客戶端（如果需要的話）
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts', // 可以看到草稿內容
})