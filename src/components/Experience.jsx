// src/components/Experience.jsx
import { motion } from 'framer-motion';

const experienceList = [
  {
    role: 'Prácticas Desarrollo Web',
    company: 'XappiensBI',
    period: 'Mar 2025 - Jun 2025',
    details: 'Realización de Aplicaciones Webs FullStack con React, Node.JS y Frappe Builder (Framework de Python). También me dediqué al mantenimiento de webs wordpress de clientes como Jumabeda o Daysa.',
  },
  {
    role: 'CIFP Carlos III',
    company: 'Grado Superior Desarrollo de Aplicaciones Web',
    period: 'Sep 2023 - Jun 2025',
    details: 'Formación en desarrollo de aplicaciones web, incluyendo tecnologías como React, Node.js, Laravel y bases de datos SQL. Participación en proyectos prácticos y colaborativos.',
  },
  {
    role: 'Auxiliar de Bazar',
    company: 'Carrefour',
    period: 'May 2022 - Feb 2025',
    details: 'Atención al cliente, gestión de inventario y reposición de productos en el área de bazar. Desarrollo de habilidades de comunicación y trabajo en equipo.',
  },
  // Agrega más experiencias según sea necesario
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">{exp.role}</h3>
              <p className="text-indigo-600 font-medium mb-1">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              <p className="text-gray-700">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
