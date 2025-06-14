// src/components/BlogPreview.jsx
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Introducción a React 18',
    excerpt: 'Descubre las nuevas características y mejoras de React 18.',
    url: '#'
  },
  {
    title: 'Guía de Tailwind CSS 4',
    excerpt: 'Cómo aprovechar al máximo las utilidades de Tailwind 4 en tus proyectos.',
    url: '#'
  },
  // Agrega más entradas de blog aquí
];

export default function BlogPreview() {
  return (
    <motion.section
      id="blog"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              className="block border-l-4 border-indigo-600 bg-gray-50 p-4 rounded hover:bg-gray-100 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
