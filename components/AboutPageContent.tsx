'use client'

import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

export default function AboutPageContent({ initialData }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20"
    >
      <motion.h1 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-6"
      >
        {initialData?.title || "關於我們"}
      </motion.h1>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="prose lg:prose-xl"
      >
        {initialData?.content ? (
          <PortableText value={initialData.content} />
        ) : (
          <p className="text-lg text-gray-700">
            這是關於我們的頁面。請在 Sanity CMS 中添加內容。
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
