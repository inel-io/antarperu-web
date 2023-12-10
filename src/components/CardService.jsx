"use client"
import Image from 'next/image'
import Flecha from '../assets/flecha.svg'
import Point from '../assets/point.svg'
import CarImage from '../assets/cardimage.svg'
import { useState } from 'react'

const Card = () => {
    return(
        <>
            <section className='pl-[5%]'>
                <div className='flex items-center justify-start md:pl-[10%] xl:pl-[11%]'>
                    <article className='flex items-center justify-around xl:w-[80%] lg:gap-16'>
                        <div>
                            <h1 className='pb-5'> - Desinsectación</h1>
                            <div className='pl-3'>
                                <p>Utilizamos poderosos desinfectantes biodegradables como el DMQ elaborado a base de
                                sales de amonio cuaternario de alta efectividad.</p>
                            </div>
                        </div>
                        <div>
                            <Image src={CarImage} alt='cardimage' className='w-96'/>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export const CardService = ({servicio,detalle}) => {

    const [open,setOpen] = useState(false)

    const MostrarCard = () => {
        setOpen(!open)
        console.log("click card",open)
    }

    return (
        <>
            <div className="container">
                <button className='container py-5' onClick={MostrarCard}>
                    <div className='flex items-center gap-10 justify-evenly px-1'>
                        <div>
                            <Image src={Point} alt='point' className='h-4 w-4'/>
                        </div>
                        <article>
                            <p className='text-xl font-semibold lg:text-2xl'>{servicio}</p>
                        </article>
                        <div className={`${open ? "rotate-90 transition-all duration-700" : "block transition-all duration-700"}`}>
                            <Image src={Flecha} alt='flecha' className='h-7 w-7'/>
                        </div>
                        <article className='hidden md:block md:text-base xl:text-xl'>
                            <p className='text-[#7D7D7D]'>{detalle} </p>
                        </article>
                    </div>
                </button>
                <div className={`grid gap-5 ${open ? "block " : "hidden"}`}>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}