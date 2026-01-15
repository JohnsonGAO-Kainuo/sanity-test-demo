import { client } from "@/sanity/lib/client";
import HomePageContent from "@/components/HomePageContent";

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

async function getProjects() {
  try {
    const query = `*[_type == "project"] | order(_createdAt desc){ _id, title, slug, description, image }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Fetch projects error:", error);
    return [];
  }
}

export default async function Home() {
  const data = await getPageData("home");
  const projects = await getProjects();

  return (
    <HomePageContent initialData={data} initialProjects={projects} />
  );
}