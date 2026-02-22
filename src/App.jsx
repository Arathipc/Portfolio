import { use } from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Training from "./components/Training"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import FloatingParticles from "./components/FloatingParticles"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add('dark');
  }, [])
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };
  return (
    <div className={darkMode ?
      'bg-linear-to-br from-slate-900 via-emerald-900/20 to-blue-900/30 min-h-screen' :
      'bg-linear-to-br from-emerald-50 via-blue-50 to-cyan-50 min-h-screen'
    }>
      <FloatingParticles darkMode={darkMode} />
      <div className="relative z-10">
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Training darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      {/* Footer */}
      <footer className={`py-8 ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2026 Arathi. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App
