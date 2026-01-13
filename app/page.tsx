import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

async function getPageData(slug: string) {
  try {
    const query = `*[_type == "page" && slug.current == $slug][0]`;
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export default async function Home() {
  const data = await getPageData("home");

  if (!data) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">歡迎來到我們的網站</h1>
        <p className="text-xl text-gray-600 mb-8">
          這是一個預設內容。請在 Sanity CMS 中創建一個 slug 為 "home" 的頁面來替換此內容。
        </p>
      </div>
    );
  }

  return (
    <div className="py-20">
      <h1 className="text-5xl font-bold mb-6 text-center">{data.title}</h1>
      <div className="prose lg:prose-xl mx-auto">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
