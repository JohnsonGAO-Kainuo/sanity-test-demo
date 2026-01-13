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

export default async function About() {
  const data = await getPageData("about");

  if (!data) {
    return (
      <div className="py-20">
        <h1 className="text-4xl font-bold mb-6">關於我們</h1>
        <p className="text-lg text-gray-700">
          這是一個預設的關於頁面。請在 Sanity CMS 中創建一個 slug 為 "about" 的頁面來替換此內容。
        </p>
      </div>
    );
  }

  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
      <div className="prose lg:prose-xl">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
