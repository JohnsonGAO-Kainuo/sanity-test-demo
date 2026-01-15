'use client'

import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 動畫配置
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 每個子元素延遲 0.1 秒，形成瀑布流效果
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HomePageContent({ initialData, initialProjects }: any) {
  return (
    <div className="py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">
          {initialData?.title || "歡迎來到我們的創新平台"}
        </h1>
        <div className="prose lg:prose-xl mx-auto text-gray-600">
          {initialData?.content ? (
            <PortableText value={initialData.content} />
          ) : (
            <p>這是一個簡潔的兩頁式網站，內容通過 Sanity CMS 進行管理。</p>
          )}
        </div>
      </motion.div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">精選項目</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {initialProjects.length > 0 ? (
            initialProjects.map((project: any) => (
              <motion.div 
                key={project._id} 
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="mt-4 text-sm font-medium text-blue-500">
                  查看詳情 →
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-400 py-10">
              暫無項目展示
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
