import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { EditableText } from "@/components/EditableText";

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
    <div className="py-20">
      <div className="text-center mb-16">
        <div className="mb-6">
          {data?._id ? (
            <EditableText
              initialValue={data.title || ""}
              documentId={data._id}
              field="title"
              className="text-5xl font-bold"
              placeholder="點擊編輯標題..."
            />
          ) : (
            <h1 className="text-5xl font-bold">歡迎來到我們的網站</h1>
          )}
        </div>
        <div className="prose lg:prose-xl mx-auto text-gray-600">
          {data?.content ? (
            <PortableText value={data.content} />
          ) : (
            <p>這是一個簡潔的兩頁式網站，內容可通過 Sanity CMS 進行管理。</p>
          )}
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">精選項目</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project: any) => (
              <div key={project._id} className="border rounded-xl p-6 hover:shadow-lg transition bg-white shadow-sm">
                <div className="mb-3">
                  <EditableText
                    initialValue={project.title || ""}
                    documentId={project._id}
                    field="title"
                    className="text-xl font-bold text-blue-600"
                    placeholder="點擊編輯項目標題..."
                  />
                </div>
                <div className="mb-4">
                  <EditableText
                    initialValue={project.description || ""}
                    documentId={project._id}
                    field="description"
                    className="text-gray-600 leading-relaxed"
                    placeholder="點擊編輯項目描述..."
                  />
                </div>
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

      <div className="mt-16 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-blue-800">🎉 前端編輯功能已啟用！</h3>
        <p className="text-blue-700 mb-2">
          <strong>如何使用：</strong>
        </p>
        <ul className="text-blue-600 space-y-1 text-sm">
          <li>• 將滑鼠懸停在標題或描述上，會出現黃色高亮提示</li>
          <li>• 點擊任何文字即可直接編輯</li>
          <li>• 編輯完成後點擊「保存到 Sanity」</li>
          <li>• 內容會立即同步到 Sanity CMS 後台</li>
          <li>• 您可以在 <a href="http://localhost:3333" className="underline font-bold" target="_blank">localhost:3333</a> 查看同步結果</li>
        </ul>
      </div>
    </div>
  );
}