import { useState, useEffect } from 'react'
import './about.css'
import * as assets from '../assets'

export default function Home() {
    return (
    <>

        <section id="about" className="min-h-screen w-full text-sand select-none relative p-10 pl-35 z-20 bg-dark-gray">

            {/* TITLE */}
            <h1 className="absolute z-50 top-[20vh] right-[10vw] text-8xl font-bold font-bebas slide-top-right" style={{ filter: "drop-shadow(5px 5px 0 var(--color-dusty-pink))", rotate: "21.5deg" }}
            >ABOUT ME</h1>

            {/* SHAPES */}
            <div className="absolute right-10 opacity-80 z-30" style={{
                width: 0,
                height: 0,
                borderTop: "40vh solid var(--color-dark-orange)",
                borderLeft: "50vw solid transparent"
            }} ></div>

            <div className=" absolute bottom-10 top-10 right-10 left-35 opacity-80 -z-30" style={{
                background: "var(--color-sand",
                
                /* The Magic: Polygon points are (x y) */
                clipPath: "polygon(0% 0%, 40% 0%, 100% 48%, 100% 100%, 0% 100%, 0% 50%)"
            }} >
            </div>    


            {/* CONTENT */}
            <div className="absolute inset-x-35 top-35 bottom-10 grid grid-cols-[1fr_1.5fr] gap-10 slide-left">

                {/* PICTURE */}
                <div className="relative self-center ml-10 w-fit translate-x-20 -translate-y-10">
                    <div
                        className="absolute top-5 left-5 z-0 h-full w-full bg-dark-rose"
                    />

                    <img
                        draggable="false"
                        className="relative z-10 block max-w-xs select-none"
                        src={assets.me}
                        alt="VENZ MILADO"
                    />
                </div>  

                {/* RIGHT CONTENT */}
                <div className="text-dark-gray grid grid-rows-2">

                    {/* INTRO */}
                    <div className="z-40 translate-y-25 text-dark-gray" style={{
                        width: "40vw"
                    }}>
                        <h1 className="font-inter font-bold text-5xl">Yahoo!</h1>
                        <h1 className="font-jetbrains font-bold text-2xl">I'm Venz Milado</h1>
                        <p className="font-bebas italic text-xl">I am a Magna Cum Laude graduate of BS in Information Technology and DOST-SEI Scholar. I'm most experienced in Front-End development and Data Analysis. </p>
                    </div>

                    <div>
                        <ul>
                            <li className="flex items-center gap-2 font-semibold text-dark-gray">
                                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z" clip-rule="evenodd"/>
                                </svg>venzmilado@gmail.com</li>
                            <li className="flex items-center gap-2 font-semibold text-dark-gray">
                                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                                </svg>09050290146</li>
                            <li className="flex items-center gap-2 font-semibold text-dark-gray">
                                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                                </svg>Tacloban City</li>
                        </ul>
                        <a
                            className="my-4 inline-flex px-4 py-2 bg-dark-rose hover:bg-dark-orange text-white font-medium transition duration-200"
                            href="/Milado-Resume.pdf"
                            download="Milado-Resume.pdf"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>

            </div>      
            
        </section>
    
    </>
    )
}