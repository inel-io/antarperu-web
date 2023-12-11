"use client"
import { useEffect, useState } from "react"
import 'animate.css';

export const Inicio = () => {

    const [bgImage, setBgImage] = useState('bg-slideruno')
    const fondos = ["bg-slideruno","bg-sliderdos","bg-slidertres"]
    let fondoIndex = 0

    useEffect(() => {
        const interval = setInterval(() => {
            fondoIndex = (fondoIndex + 1) % fondos.length
            setBgImage(fondos[fondoIndex])
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const textwri = "Saneamiento Ambiental y Seguridad Industrial" 

    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() =>{
    const typingTimer = setTimeout(()=>{
        if(currentIndex < textwri.length){
            setDisplayText(textwri.slice(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
            }
        },50)

        return() => clearTimeout(typingTimer)
        },[currentIndex])

    return( 
        <main id="" className="h-screen">
            <section className={`h-[75%] bg-no-repeat bg-cover grid justify-center items-end ${bgImage} bg-center animate__animated animate__fadeInUp`}>
                <div className="pb-16 grid justify-center items-center text-center">
                    <p className="text-4xl md:text-5xl xl:text-7xl text-white font-semibold">Personal Calificado</p>
                    <p className="text-lg text-white font-semibold lg:text-xl">Equipo especializado en  cada servicio que brindamos</p>
                </div>
            </section>
            <section className="flex flex-col justify-center bg-[#F3F5F6] h-[25%] items-center">
                <div className="container text-center">
                    <p className="text-2xl md:text-5xl font-semibold pb-5 text-primary">{displayText}</p>
                    <p className="text-primary text-1xl md:text-2xl">Antar Perú es una empresa especializada en el servicio de</p>
                    <p className="text-primary text-1xl md:text-2xl">saneamiento ambiental y seguridad para todo tipo de empresas.</p>
                </div>
            </section>
        </main>
    )
}