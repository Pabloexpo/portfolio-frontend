// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', body: '' });
  const [status, setStatus] = useState(null);
  const API = import.meta.env.VITE_API_URL; // Ej: http://127.0.0.1:8000/api

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${API}/messages`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error en la petición');
      setForm({ nombre: '', email: '', body: '' });
      setStatus('success');
      toast.success('¡Mensaje enviado con éxito!');
    } catch (err) {
      console.error(err);
      setStatus('error');
      toast.error('Error al enviar el mensaje.');
    }
  };

  return (
    <>
      <motion.section
        id="contact"
        className="py-16 bg-gray-50 scroll-mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Tu email"
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              placeholder="Tu mensaje"
              rows="4"
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </motion.section>

      {/* Contenedor de toast notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}
