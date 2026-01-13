import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

// 創建一個具有寫入權限的客戶端
const writeClient = client.withConfig({
  token: process.env.SANITY_API_WRITE_TOKEN || 'skntP9wajkGDSlfPmWi6r3GkstE2tNqfPlNpeViCd0PU6ldC0CChLaAHiIXrbLqMwtds8S8klfNnR1n7d99QSlgKnjy56hepTLRKpzFaBu2q0nVknMHuRLwObOe0zrshsWjY0SjJsbSP24vRhmX2rGv6zmomJJLbd2xuwySgZB8QnfMziSXf',
  useCdn: false,
})

export async function POST(request: NextRequest) {
  try {
    const { documentId, field, value } = await request.json()

    // 驗證必要參數
    if (!documentId || !field || value === undefined) {
      return NextResponse.json(
        { error: '缺少必要參數: documentId, field, value' },
        { status: 400 }
      )
    }

    // 更新文檔
    const result = await writeClient
      .patch(documentId)
      .set({ [field]: value })
      .commit()

    return NextResponse.json({ 
      success: true, 
      message: '內容已成功更新到 Sanity',
      result 
    })

  } catch (error) {
    console.error('Sanity 更新錯誤:', error)
    return NextResponse.json(
      { error: '更新失敗', details: error },
      { status: 500 }
    )
  }
}