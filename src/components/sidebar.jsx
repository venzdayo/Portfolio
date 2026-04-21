import { useState, useEffect } from 'react'
import '../index.css'
import './sidebar.css'
import * as assets from '../assets'

export default function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const items = [
    { name: 'HOME', icon: 'm4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5' },
    { name: 'ABOUT', icon: 'M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' },
    { name: 'EDUCATION', icon: 'M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023' },
    { name: 'EXPERIENCE', 
    icon: 'm20.9532 11.7634-2.0523-2.05225-2.0523 2.05225 2.0523 2.0523 2.0523-2.0523Zm-1.3681-2.73651-4.1046-4.10457L12.06 8.3428l4.1046 4.1046 3.4205-3.42051Zm-4.1047 2.73651-2.7363-2.73638-8.20919 8.20918 2.73639 2.7364 8.2091-8.2092Z M12.9306 3.74083l1.8658 1.86571-2.0523 2.05229-1.5548-1.55476c-.995-.99505-3.23389-.49753-3.91799.18657l2.73639-2.73639c.6841-.68409 1.9901-.74628 2.9229.18658Z'},
    { name: 'PROJECTS', icon: 'M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z m-9 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' },
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
            {index > 0 && <hr />}
            <a href={`#${item.name.toLowerCase()}`} style={{ display: 'contents' }}>
                <div className="timeline-middle z-50 hover:scale-150 transition-transform duration-200" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <svg class="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="-4 -4 32 32">
                    <circle cx="12" cy="12" r="16" fill="currentColor"/>
                    <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon}/>
                </svg>
                </div>
            </a>
            <div className="timeline-end timeline-box relative px-5 pl-10 z-40 h-10 font-jetbrains font-bold text-lg bg-dark-orange text-white border-none" style={{ pointerEvents: hoveredIndex !== null && index !== hoveredIndex ? 'none' : 'auto' }}>
                {item.name}
            </div>
          </li>
        ))}
        </ul>
    </div>
  )
}