import { useState, useEffect } from 'react'
import './sidebar.css'
import * as assets from '../assets'

export default function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const items = [
    { name: 'HOME'},
    { name: 'ABOUT' },
    { name: 'EDUCATION'},
    { name: 'EXPERIENCE'},
    { name: 'PROJECTS'},
  ]

  const getTransform = (index) => {
    if (hoveredIndex === null) return 'translateY(0)'
    
    const distance = index - hoveredIndex
    const offset = distance * 20
    
    return `translateY(${offset}px)`
  }

  return (
    <div className="fixed flex items-center justify-start h-screen z-50 -ml-30">
       <ul className="timeline timeline-vertical gap-2">
        {items.map((item, index) => (
          <li 
            key={index}
            style={{ 
              transform: getTransform(index),
              transition: 'transform 0.3s ease',
            }}
          >
            <a href={`#${item.name.toLowerCase()}`} style={{ display: 'contents' }}>
                <div className="timeline-middle z-50 hover:scale-120 transition-transform duration-200" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                  <div className='w-20 h-10 bg-dark-rose flex items-center justify-center'>
                    <h1 className="font-jetbrains font-bold text-sand">[CAT-0{index+1}]</h1>
                  </div>
                </div>
            </a>
            <div className="timeline-end timeline-box relative px-5 pl-10 z-40 h-10 font-jetbrains font-bold text-lg bg-pink text-white border-none" style={{ pointerEvents: hoveredIndex !== null && index !== hoveredIndex ? 'none' : 'auto' }}>
                {item.name}
            </div>
          </li>
        ))}
        </ul>
    </div>
  )
}