# Sanity + Next.js 網站

一個簡潔的 2 頁網站，使用 Sanity CMS 管理內容。

## ✅ 配置狀態
- **Project ID**: `4pte7m7l`
- **Dataset**: `production`
- **Schema**: Page、Project、Post（已部署到雲端）
- **線上網站**: 已部署在 Vercel

## 🚀 使用方式

### 管理內容（給客戶/內容編輯者）
1. 在終端執行：
```bash
npx sanity dev
```

2. 打開瀏覽器訪問：[http://localhost:3333](http://localhost:3333)

3. 登錄後即可管理：
   - **Page**: 首頁和關於頁（Slug 必須是 `home` 和 `about`）
   - **Project**: 項目展示
   - **Post**: 文章發布

### 開發網站（給開發者）
線上網站已部署在 Vercel，本地開發時：
```bash
npm run dev
```
訪問 [http://localhost:3000](http://localhost:3000)

## 📦 Vercel 環境變數
確保在 Vercel 設置中添加：
```
NEXT_PUBLIC_SANITY_PROJECT_ID=4pte7m7l
NEXT_PUBLIC_SANITY_DATASET=production
```

## 🔧 常用命令
```bash
# 部署 Schema 到雲端
npx sanity schema deploy

# 查看已部署的 Schema
npx sanity schema list

# 啟動 Sanity Studio
npx sanity dev
```

## 📚 相關連結
- [Sanity 項目控制台](https://www.sanity.io/manage/personal/project/4pte7m7l)
- [Sanity 文檔](https://www.sanity.io/docs)
