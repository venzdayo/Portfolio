import { useState, useEffect } from 'react'
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Education from './components/education'
import * as assets from './assets'
import './index.css'
import './components/animations.css'
import { initAnimations } from './components/animations.js'

function App() {
  useEffect(() => {

    initAnimations()
    
  }, [])
  
  return (
    <>
      <Sidebar className="hidden md:block" />

      <Home />

      <About />

      <Education />

    </>
  )
}

export default App

