// src/components/Hero.jsx
import { motion } from 'framer-motion';
import myPhoto from '../assets/myphoto.png'; // Coloca aquí tu foto

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-b from-indigo-800 to-black"
    >
      {/* Texto del Hero */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left px-4 md:px-8 mt-8 md:mt-0"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
          Pablo Expósito
        </h1>
        <p className="text-xl text-gray-300">
          Desarrollador Web Junior · React · Laravel · Tailwind
        </p>
      </motion.div>

      {/* Imagen rotada */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-48 h-48 md:w-64 md:h-64 relative"
      >
        <div className="absolute inset-0  rounded-lg transform rotate-5 shadow-lg" />
        <img
          src={myPhoto}
          alt="Foto de Pablo"
          className="absolute inset-0 w-full h-full object-cover rounded-lg transform -rotate-3"
        />
      </motion.div>
    </section>
  );
}