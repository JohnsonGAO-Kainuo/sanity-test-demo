# Sanity 2-Page Site Demo

這是一個使用 Next.js 和 Sanity CMS 構建的兩頁式網站。

## 特色
- **雙頁面結構**: 首頁 (Home) 和 關於我們 (About)。
- **Sanity CMS 整合**: 所有內容均可通過 Sanity 後台進行管理。
- **內置 CMS 後台**: 訪問 `/studio` 即可直接進入 Sanity 管理界面。
- **現代技術棧**: Next.js (App Router), Tailwind CSS, TypeScript.

## 如何開始

### 1. 設置 Sanity 項目
您需要一個 Sanity 項目 ID。請訪問 [Sanity.io](https://www.sanity.io/) 創建一個新項目，然後：
1. 在 `sanity/env.ts` 中填入您的 `projectId` 和 `dataset`。
2. 在 Sanity 控制台中，將您的部署網址（或 `http://localhost:3000`）添加到 CORS 允許列表中。

### 2. 本地開發
```bash
npm install
npm run dev
```

### 3. 使用 CMS 管理內容
1. 啟動項目後，訪問 `http://localhost:3000/studio`。
2. 登錄您的 Sanity 帳號。
3. 創建兩種類型的文檔：
   - 一個 Slug 為 `home` 的 Page。
   - 一個 Slug 為 `about` 的 Page。
4. 發布後，前端頁面將自動更新。

## 如何上傳到 GitHub

由於自動化權限限制，請手動執行以下命令將代碼推送到您的 GitHub 倉庫：

```bash
git remote add origin https://github.com/您的用戶名/您的倉庫名.git
git branch -M main
git push -u origin main
```
