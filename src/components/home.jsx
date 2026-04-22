import { useState, useEffect } from 'react'
import Ruler from './ruler'
import '../index.css'
import './home.css'
import * as assets from '../assets'

export default function Home() {
    const [currentTime, setCurrentTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const hours = String(now.getHours()).padStart(2, '0')
            const minutes = String(now.getMinutes()).padStart(2, '0')
            const seconds = String(now.getSeconds()).padStart(2, '0')
            setCurrentTime(`${hours}:${minutes}:${seconds}`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
        <section id="home" className="fixed top-0 left-0 w-full h-screen flex items-center justify-center select-none overflow-hidden">
        <Ruler />

        {/* IMAGES */}
        <img draggable="false" className="absolute bottom-0 left-0 max-w-[35vw] object-cover -z-15" src={assets.building} alt="Background" />
        <img draggable="false" className="absolute bottom-0 lg:right-45 max-w-[30vw] object-cover -z-10" src={assets.building2} alt="Background"/>
        <img draggable="false" className="absolute bottom-0 right-0 max-w-[32vw] object-cover" src={assets.flag} alt="Background" style={{ transform: "rotate(10deg)" }} />

        {/* SHAPES  */}
        <div className="absolute h-80 w-80 left-30 top-60 -z-20 rounded-full bg-dark-orange opacity-80"></div>
        <div className="absolute bottom-0 right-45 opacity-80 -z-20" style={{
          width: 0, 
          height: 0, 
          borderLeft: '160px solid transparent', 
          borderRight: '160px solid transparent', 
          borderBottom: '500px solid var(--color-dark-orange)',
          transform: "rotate(-66deg)"}}
        ></div>

        {/* HERO */}
        <div className="hero-content flex-col text-dark-gray">
          <p className="-mb-7 font-bold font-jetbrains select-none" >1917 CM</p>
          <img 
              draggable="false"
              className="max-w-85 -mb-3 select-none" 
              src={assets.dimension} 
              alt="dimension"
          />
          <img 
              draggable="false"
              className="logo max-w-xs select-none" 
              src={assets.VMDarkOrange} 
              alt="VENZ MILADO" 
          />
          <div className="typewriter w-40 h-7 -mb-3 bg-dark-rose">
            <h1 className="text-center align-center text-sand font-jetbrains font-bold">[VENZ MILADO]</h1>
          </div>
          <div className="typewriter w-65 h-7 bg-dark-rose">
            <h1 className="text-center align-center text-sand font-jetbrains font-bold">[DEVELOPER/PROGRAMMER]</h1>
          </div>
        </div>

        {/* TEXT */}
        <div className="typewriter absolute top-15 left-15 w-65 h-7 bg-dark-orange">
          <h1 className="text-center align-center text-sand font-jetbrains font-bold">[PORTFOLIO-VER-{new Date().getFullYear()}-V1]</h1>
        </div>
        <div className="typewriter absolute top-25 left-15 w-30 h-7 bg-dark-orange">
          <h1 className="text-center align-center text-sand font-jetbrains font-bold">[{currentTime}]</h1>
        </div>
        <div className="typewriter absolute bottom-15 left-15 w-95 h-7 bg-sand">
          <h1 className="text-center align-center text-dark-gray font-jetbrains font-bold">[ZUEV WORKERS' CLUB, MOSCOW, USSR]</h1>
        </div>
        <div className="typewriter absolute bottom-5 left-15 w-40 h-7 bg-sand">
          <h1 className="text-center align-center text-dark-gray font-jetbrains font-bold">[ILYA GOLOSOV]</h1>
        </div>
        <div className="typewriter absolute bottom-15 right-25 w-50 h-7 bg-sand">
          <h1 className="text-center align-center text-dark-gray font-jetbrains font-bold">[IAKOV CHERNIKOV]</h1>
        </div>
        <div className="typewriter absolute bottom-5 right-25 w-80 h-7 bg-sand">
          <h1 className="text-center align-center text-dark-gray font-jetbrains font-bold">[ARKHITEKTURNYE FANTAZII 28]</h1>
        </div>
      </section>
      <div className="h-screen"></div>
      </>
    )
}