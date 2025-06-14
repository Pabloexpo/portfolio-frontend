// src/components/Projects.jsx
import { motion } from 'framer-motion';
import padelistasImg from '../assets/padelistas.png';
import inboxhubImg from '../assets/inboxhub.png';


const projectList = [
  {
    title: 'Padelistas Cartagena',
    description: 'Web app para gestionar reservas de pistas de pádel, frontend con React y Tailwind, backend en Laravel.',
    url: 'https://pem-padelistas.eu',
    github: 'https://github.com/Pabloexpo/tfg-frontend-pem',
    image: padelistasImg,
  },
  {
    title: 'Inbox Hub',
    description: 'Hub de mensajes realizado con React y TypeScript, me dediqué a la parte de frontend, realizando el diseño y aspectos de consumo de APIs y, en cuanto al backend, se utilizó Node.js con Express',
    url: 'https://www.inbox-hub.com/',
    github: null,
    image: inboxhubImg,
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16 bg-gradient-to-b from-indigo-900 via-black to-indigo-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>
        <div className="space-y-16">
          {projectList.map((proj, i) => (
            <div
              key={i}
              className="md:flex items-center md:space-x-8"
            >
              {/* Preview en vivo mediante iframe */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="flex-shrink-0 md:w-1/2 h-64 md:h-80 overflow-hidden rounded-lg border-4 border-pink-600"
              >
                <img
                  src={proj.image}
                  alt={`Vista previa de ${proj.title}`}
                  className="w-full h-full object-cover"
                />

              </motion.div>

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + 0.1 * i }}
                className="mt-6 md:mt-0 md:w-1/2"
              >
                <h3 className="text-3xl font-semibold mb-4">{proj.title}</h3>
                <p className="mb-4 text-lg text-gray-200">
                  {proj.description}
                </p>
                <div className="flex space-x-4 mb-6 items-center text-pink-400">
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <span className="underline">Live</span>
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <span className="underline">GitHub</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
