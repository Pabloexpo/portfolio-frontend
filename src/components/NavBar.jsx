// src/components/NavBar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cvPDF from '../assets/PABLO FINAL CV.pdf'; // Importamos el PDF

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { anchor: 'hero', label: 'Home' },
    { anchor: 'about', label: 'Sobre mí' },
    { anchor: 'projects', label: 'Proyectos' },
    { anchor: 'experience', label: 'Experiencia' },
    { anchor: 'contact', label: 'Contacto' },
    { href: cvPDF, label: 'CV', external: true }, // Enlace al PDF importado
  ];

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 shadow"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <h3>
            Pablo Expósito
          </h3>
        </div>
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(o => !o)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <ul className="hidden sm:flex space-x-6">
          {links.map((l, index) => (
            <li key={index}>
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 font-medium"
                >
                  {l.label}
                </a>
              ) : (
                <a
                  href={`#${l.anchor}`}
                  className="hover:text-indigo-600 font-medium"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* menú móvil */}
      {open && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="sm:hidden bg-white shadow-lg overflow-hidden"
        >
          {links.map((l, index) => (
            <li key={index} className="border-t">
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block p-4"
                >
                  {l.label}
                </a>
              ) : (
                <a
                  href={`#${l.anchor}`}
                  onClick={() => setOpen(false)}
                  className="block p-4"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
