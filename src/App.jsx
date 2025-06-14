import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import BlogPreview from './components/BlogPreview'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
              </>
            }
          />
          {/* Si quisieras sección blog / proyectos individuales */}
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
