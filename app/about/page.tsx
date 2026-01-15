import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

// 強制 Next.js 每次請求都重新獲取數據，實現「秒級同步」
export const revalidate = 0;

async function getPageData(slug: string) {
  try {
    const query = `*[_type == "page" && slug.current == $slug][0]{ _id, title, slug, content }`;
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export default async function About() {
  const data = await getPageData("about");

  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-6">
        {data?.title || "關於我們"}
      </h1>
      <div className="prose lg:prose-xl">
        {data?.content ? (
          <PortableText value={data.content} />
        ) : (
          <p className="text-lg text-gray-700">
            這是關於我們的頁面。請在 Sanity CMS 中添加內容。
          </p>
        )}
      </div>

      {/* 管理員提示（僅在開發環境顯示） */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-16 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-bold mb-2 text-gray-800">📝 內容管理</h3>
          <p className="text-gray-600 text-sm">
            要編輯此頁面內容，請訪問 Sanity Studio: 
            <a 
              href="http://localhost:3333" 
              className="ml-1 text-blue-600 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              localhost:3333
            </a>
          </p>
        </div>
      )}
    </div>
  );
}