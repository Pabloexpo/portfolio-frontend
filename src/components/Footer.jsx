// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Pablo Expósito. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
