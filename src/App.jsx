import { useState, useEffect } from 'react'
import Sidebar from './components/sidebar'
import Ruler from './components/ruler'
import Home from './components/home'
import * as assets from './assets'
import './index.css'

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#home') {
        window.scrollTo(0, 0)
      }
    }
    
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])
  return (
    <>
      <Sidebar className="hidden md:block" />

      <Home />

      <section id="about" className="min-h-screen w-full bg-dark-gray text-white select-none relative z-20">
        <div className="flex items-center justify-center h-full">
          <div className="max-w-4xl px-8">
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p>Your content here...</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default App

