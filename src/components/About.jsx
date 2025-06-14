import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-600">
            Soy Pablo Expósito, un desarrollador web junior apasionado por crear aplicaciones modernas y responsivas. Tengo experiencia en React, Laravel y Tailwind CSS, y disfruto trabajando en proyectos que desafían mis habilidades y me permiten aprender continuamente.
        </p>
      </div>
    </motion.section>
  );
}