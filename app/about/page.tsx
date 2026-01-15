import { client } from "@/sanity/lib/client";
import AboutPageContent from "@/components/AboutPageContent";

// 強制 Next.js 每次請求都重新獲取數據
export const revalidate = 0;

async function getPageData(slug: string) {
  try {
    const query = `*[_type == "page" && slug.current == $slug][0]{ _id, title, slug, content }`;
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export default async function About() {
  const data = await getPageData("about");

  return (
    <AboutPageContent initialData={data} />
  );
}