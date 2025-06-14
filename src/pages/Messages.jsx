// src/pages/Messages.jsx
import { useEffect, useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/messages`, { headers: { Accept: 'application/json' } })
      .then(res => res.json())
      .then(setMessages)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mensajes</h2>
      {messages.length === 0 ? (
        <p className="text-gray-600">No hay mensajes.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map(msg => (
            <li key={msg.id} className="border p-4 rounded-lg">
              {msg.nombre} {msg.apellidos} — {msg.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
