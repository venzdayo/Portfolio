import { useState } from 'react'
import heroImg from './assets/gradient_dark.png'
import Navbar from './components/navbar'
import './App.css'
import './index.css'

function App() {
  return (
    <>
      <Navbar />

      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="hero-title">VENZ</h1>
            <h1 className="hero-title">MILADO</h1>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

