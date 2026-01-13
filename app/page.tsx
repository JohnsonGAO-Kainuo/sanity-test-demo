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

async function getProjects() {
  try {
    const query = `*[_type == "project"] | order(_createdAt desc)`;
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
    <div className="py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">{data?.title || "歡迎來到我們的網站"}</h1>
        <div className="prose lg:prose-xl mx-auto text-gray-600">
          {data?.content ? <PortableText value={data.content} /> : <p>這是一個簡潔的兩頁式網站，內容可通過 Sanity CMS 進行管理。</p>}
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">精選項目</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project: any) => (
              <div key={project._id} className="border rounded-xl p-6 hover:shadow-lg transition bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                <div className="mt-4 text-sm font-medium text-blue-500 hover:underline cursor-pointer">
                  查看詳情 →
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-400 py-10">
              暫無項目，請在 Sanity 後台添加。
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
