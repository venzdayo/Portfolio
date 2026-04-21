import { useState } from 'react'
import Sidebar from './components/sidebar'
import Ruler from './components/ruler'
import * as assets from './assets'
import './index.css'

function App() {
  return (
    <>
      <Sidebar />

      <section id="home" className="min-h-screen w-full flex items-center justify-center select-none overflow-hidden relative">
        <Ruler />
        <img draggable="false" className="absolute bottom-0 left-0 max-h-screen object-cover" src={assets.building} alt="Background" />
        <img draggable="false" className="absolute bottom-0 right-0 max-h-screen object-cover" src={assets.flag} alt="Background" style={{ transform: "rotate(10deg)" }} />
        <div className="hero-content flex-col lg:flex-row text-dark-gray">
          <img 
            draggable="false"
            className="max-w-xs select-none" 
            src={assets.VMDarkOrange} 
            alt="VENZ MILADO" 
          />
          <div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen w-full bg-dark-gray text-white select-none relative z-10">
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

