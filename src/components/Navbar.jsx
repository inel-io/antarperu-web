"use client"
import {HiMenu} from 'react-icons/hi'
import Logo from "../assets/logantar.svg"
import Phone from '../assets/phone.svg'
import Line from '../assets/line.svg'
import Email from '../assets/email.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import 'animate.css';

export const Navbar = () => {

    const [open,setOpen] = useState(false)

    const menuOpen = () => {
        setOpen(!open)
        console.log("click",open)
    }

    const navRoutes = [
        {
            name: 'Inicio',
            path: '/#'
        },
        {
            name: 'Servicios',
            path: '/#services'
        },
        {
            name: 'Clientes',
            path: '/#clients'
        },
        {
            name: 'Contacto',
            path: '/#contact'
        }
    ]

    return(
        <div className='animate__animated animate__fadeInDown'>
            <section className='bg-white sticky top-0 md:hidden'>
                <header className='flex items-center justify-between py-1 shadow-md px-3'>
                    <div>
                        <Image src={Logo} alt='antar-peru' className='w-16 h-16'/>
                    </div>
                    <button onClick={menuOpen}>
                        <HiMenu className='w-12 h-12'/>
                    </button>
                </header>
                <nav className={`bg-white shadow-md border-t ${ open ? "block  transition-all duration-1000" : "hidden"}`}>
                    {navRoutes.map((route, index) => (
                        <ul key={index} className="hover:bg-primary hover:text-white">
                            <Link href={route.path}><li className='text-center py-1'>{route.name}</li></Link>
                        </ul>
                    ))}
                </nav>
            </section>
            <section className='hidden md:block'>
                <div className='py-3 border-b-[2px] border-primary mx-10'>
                        <div className='flex items-center justify-between lg:px-20'>
                            <section className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <Image src={Phone} alt="phone" className='h-[20px]'/>
                                    <p className='text-primary '>+51 939 044 095</p>
                                </div>
                                <Image src={Line} alt="linea" className='h-[25px]'/>
                                <div className='flex gap-2 items-center'>
                                    <Image src={Email} alt="email" className='h-[15px]'/>
                                    <p className='text-primary'>servicios@antarperusac.com</p>
                                </div>
                            </section> 
                            <section className='flex gap-5 sticky'>
                                <Link href="https://www.facebook.com/profile.php?id=100088215922096" target='_blank'><Image src={Facebook} alt="facebook"  className='h-[25px]'/></Link>
                                <Link href="#" target='_blank'><Image src={Instagram} alt="instagram" className='h-[25px]' /></Link>
                            </section>
                        </div>
                </div>
            </section>
            <section className='hidden md:block sticky top-0 bg-white'>
                <section className='flex items-center justify-between px-10 lg:px-20 xl:px-40 py-1 shadow-md'>
                    <Image src={Logo} alt='antar-peru' className='w-16 h-16'/>
                        <nav className='flex gap-20 lg:gap-36 xl:gap-44'>
                            {navRoutes.map((route, index) => (
                                <ul key={index} className="">
                                    <Link href={route.path}><li className='text-lg font-semibold p-1 hover:underline'>{route.name}</li></Link>
                                </ul>
                            ))}
                        </nav>
                </section>
            </section>
        </div>
    )
}