import { useState } from 'react'
import Navbar from './components/navbar'
import * as assets from './assets'
import './index.css'

function App() {
  return (
    <>

      <Navbar />
      
      <section className="min-h-screen w-full flex items-center justify-center bg-sand select-none">
        <div className="hero-content flex-col lg:flex-row text-dark-gray">
          <img 
            draggable="false"
            className="max-w-xs select-none" 
            src={assets.VMDarkOrange} 
            alt="VENZ MILADO" 
          />
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl hero-title">
              VENZ MILADO
            </h1>
            <p className="py-1">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full bg-dark-gray text-white select-none">
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

