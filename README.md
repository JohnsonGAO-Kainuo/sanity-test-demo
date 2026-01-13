# Sanity + Next.js 專業網站

一個完全由 Sanity CMS 驅動的專業展示網站。

## 🎯 項目特色

### 對外展示網站（生產環境）
- ✅ **純展示模式**：乾淨、專業的用戶界面
- ✅ **即時同步**：Sanity 內容更新後網站自動刷新
- ✅ **高性能**：Next.js SSG + Sanity CDN
- ✅ **SEO 優化**：完整的元數據和結構化數據

### 內容管理系統（Sanity Studio）
- ✅ **直觀編輯**：所見即所得的內容編輯器
- ✅ **即時預覽**：編輯時可預覽最終效果
- ✅ **團隊協作**：多人同時編輯，實時同步
- ✅ **版本控制**：內容歷史記錄和回滾功能

## 🚀 使用方式

### 內容管理（給內容編輯者）
```bash
# 啟動 Sanity Studio
npx sanity dev
```
訪問：[http://localhost:3333](http://localhost:3333)

**內容類型：**
- **Page**：管理首頁和關於頁（slug 必須是 `home` 和 `about`）
- **Project**：管理項目展示
- **Post**：管理文章發布

### 網站開發（給開發者）
```bash
# 本地開發
npm run dev
```
訪問：[http://localhost:3000](http://localhost:3000)

```bash
# 生產構建
npm run build
npm run start
```

## 📦 部署配置

### Vercel 環境變數
```
NEXT_PUBLIC_SANITY_PROJECT_ID=4pte7m7l
NEXT_PUBLIC_SANITY_DATASET=production
```

### 內容同步機制
1. **編輯內容**：在 Sanity Studio 中編輯並發布
2. **自動部署**：Vercel 檢測到內容變化自動重新部署
3. **即時更新**：網站內容立即更新

### Webhook 設置（可選）
在 Sanity 項目設置中添加 Webhook：
```
https://your-site.vercel.app/api/revalidate
```

## 🔧 技術架構

### 前端技術棧
- **Next.js 16**：React 框架，支持 SSG/SSR
- **Tailwind CSS v4**：現代 CSS 框架
- **TypeScript**：類型安全

### 內容管理
- **Sanity Studio**：無頭 CMS 編輯界面
- **GROQ**：強大的查詢語言
- **Portable Text**：結構化富文本

### 部署平台
- **Vercel**：前端託管
- **Sanity Cloud**：內容託管

## 📚 相關資源
- [Sanity 項目控制台](https://www.sanity.io/manage/personal/project/4pte7m7l)
- [Sanity 文檔](https://www.sanity.io/docs)
- [Next.js 文檔](https://nextjs.org/docs)

## 🎨 內容管理工作流程

1. **內容創建**：在 Sanity Studio 中創建新內容
2. **預覽檢查**：使用預覽功能查看效果
3. **發布內容**：點擊 Publish 使內容生效
4. **網站更新**：Vercel 自動檢測並重新部署
5. **用戶可見**：新內容在生產網站上線

這樣的架構確保了內容管理的專業性和網站展示的穩定性。