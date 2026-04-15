import { useState, useEffect } from 'react'
import '../index.css'
import './navbar.css'
import * as assets from '../assets'

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Adjust navbar collapse based on scroll
  const maxScroll = 300 // pixels before full collapse
  const collapseRatio = Math.min(scrollY / maxScroll, 1)
  
  // Width: start full-width, collapse to left side
  const marginLeft = 1.25 // Fixed 1.25rem (mx-5) on left - no movement
  const marginRight = 1.25 + (collapseRatio * 4) // 1.25rem → increases to collapse from right
  const menuGap = 4 - (collapseRatio * 3.8) // reduce gap between items
  const menuOpacity = 1 - (collapseRatio * 0.4) // slight fade out
  const navWidth = 97 - (collapseRatio * 40); // Shinks to 60%

    return (
    <div 
        className="navbar sticky top-5 z-50 bg-dark-gray px-8 transition-all duration-300 flex items-center"
        style={{
        maxWidth: `${navWidth}%`,
        marginLeft: '1.25rem',
        marginRight: `${marginRight}rem`,
        marginTop: `${Math.max(5, 20 - collapseRatio * 15)}px`,
        '--bracket-opacity': collapseRatio,
        border: `1px solid rgba(255, 255, 255, ${collapseRatio * 0.3})`,
        }}
    >  
        <div className="flex-none pr-10"> 
            <img 
            src={assets.VMWhite} 
            alt="Logo" 
            className="w-20 h-12 object-contain select-none cursor-pointer"
            draggable="false"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
        </div>

        <div className="flex-1 flex justify-end transition-all duration-300" style={{ opacity: menuOpacity }}>
            <ul 
            className="menu menu-horizontal items-center"
            style={{ gap: `${Math.max(menuGap * 5, 0)}px` }}
            >
                <li className="nav-link text-lg"><a className="navtext">ABOUT</a></li>
                <li className="nav-link text-lg"><a className="navtext">PROJECTS</a></li>
                <li className="nav-link text-lg"><a className="navtext">HISTORY</a></li>
                <li className="nav-link text-lg"><a className="navtext">CONTACT</a></li>
            </ul>
        </div>
    </div>
    )
}