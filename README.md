# Sanity 2-Page Site Demo

這是一個使用 Next.js 和 Sanity CMS 構建的兩頁式網站。

## ✅ 已完成的配置清單

### 核心配置
- ✅ **Project ID**: `4pte7m7l`
- ✅ **Dataset**: `production`
- ✅ **Schema 部署**: 已同步到 Sanity 雲端
- ✅ **CORS 設置**: 已允許 localhost:3333
- ✅ **MCP 連接**: 已在 Cursor 中配置

### 內容模型
- ✅ **Page**: 用於管理首頁和關於頁
- ✅ **Project**: 用於展示作品集
- ✅ **Post**: 用於發布文章

### 技術棧
- ✅ **Next.js 16** (App Router)
- ✅ **Tailwind CSS v4**
- ✅ **TypeScript**
- ✅ **Sanity Studio (嵌入式)**

## 🚀 如何使用

### 1. 啟動開發環境
```bash
npm run dev
```

### 2. 訪問網站
- **前端網站**: [http://localhost:3333](http://localhost:3333)
- **內容管理後台**: [http://localhost:3333/studio](http://localhost:3333/studio)

### 3. 管理內容
1. 訪問 `/studio` 並登錄您的 Sanity 帳號
2. 創建內容時，請注意：
   - **Page**: 首頁的 Slug 必須是 `home`，關於頁的 Slug 必須是 `about`
   - **Project**: 會自動顯示在首頁的「精選項目」區域
   - **Post**: 用於發布文章（需要前端頁面支持）

## 📦 部署到 Vercel

### 環境變數設置
在 Vercel 項目設置中添加以下環境變數：
```
NEXT_PUBLIC_SANITY_PROJECT_ID=4pte7m7l
NEXT_PUBLIC_SANITY_DATASET=production
```

### CORS 配置
確保在 [Sanity 管理面板](https://www.sanity.io/manage/personal/project/4pte7m7l/api) 中添加您的 Vercel 網址到 CORS 允許列表。

## 🔧 進階功能

### Schema 部署
當您修改了 Schema 後，運行以下命令同步到雲端：
```bash
npx sanity schema deploy
```

### 查看已部署的 Schema
```bash
npx sanity schema list
```

## 📚 相關資源
- [Sanity 官方文檔](https://www.sanity.io/docs)
- [Next.js 文檔](https://nextjs.org/docs)
- [您的 Sanity 項目控制台](https://www.sanity.io/manage/personal/project/4pte7m7l)
