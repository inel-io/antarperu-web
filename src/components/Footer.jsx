import Image from 'next/image'
import Logo from "../assets/logantar.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Ubicacion from "../assets/ubicacion.svg"
import Phone from "../assets/phone.svg"
import Email from "../assets/email.svg"

export const Footer = () => {
    return (
        <footer>
            <section className='bg-white py-10 lg:columns-2 lg:flex justify-center xl:gap-20'>
                <div className='lg:max-w-[28%] mx-3 lg:mx-0'>
                    <div className="flex items-center justify-center py-5 md:flex-col lg:justify-start">
                        <Image src={Logo} alt='antar' draggable="false" className='h-[50] w-[50px]' />
                        <p className="text-sm font-bold">Sede Principal Punta Hermosa.</p>
                    </div>
                    <article className="md:mx-[32%] lg:mx-[20%]">
                        <div className='pt-5 flex flex-col items-start justify-center gap-4 lg:justify-start'>
                            <div className='flex items-center gap-2'>
                                <Image src={Ubicacion} alt='ubicacion' className='h-[20px] w-[20px]' />
                                <p className='text-sm'>Pasillo E Puertas, Carretera Panamerica Sur 2001 Interior E-11, Punta Hermosa</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src={Phone} alt='phone' className='h-[20px] w-[20px]' />
                                <p className='text-sm'>+51 939 044 095</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src={Email} alt='email' className='h-[20px] w-[20px]' />
                                <p className='text-sm'>servicios@antarperusac.com</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div className='sm:columns-4 sm:py-10 sm:flex sm:justify-around lg:gap-8 xl:gap-20'>
                    <div className='m-3'>
                        <h2 className='uppercase font-bold text-sm py-4'>Servicios</h2>
                        <ul>
                            <li className='text-sm'>Desratización</li>
                            <li className='text-sm'>Desinfección</li>
                            <li className='text-sm'>Desinsectación</li>
                            <li className='text-sm'>Servicio técnico en electricidad</li>
                            <li className='text-sm'>Sistemas de detección de incendios</li>
                        </ul>
                    </div>

                    <div className='m-3'>
                        <h2 className='uppercase font-bold text-sm py-4'>mas servicios</h2>
                        <ul>
                            <li className='text-sm'>Mantenimiento Certificado y protocolo de pozo a tierra</li>
                            <li className='text-sm'>Venta de gabinetes contraincendios y pedestales para extintores</li>
                            <li className='text-sm'>Asesoramiento para formalización ante el municipio y otras entidades del Estado</li>
                            <li className='text-sm'>Asesoramiento y elaboración de expedientes en Defensa Civil ( ITSE )</li>
                            <li className='text-sm'>Capacitación Certificada en manejo de extintores</li>
                        </ul>
                    </div>

                    <div className='m-3'>
                        <h2 className='uppercase font-bold text-sm py-4'>te ayudamos</h2>
                        <ul>
                            <li className='text-sm'>Nosotros</li>
                            <li className='text-sm'>Certificaciones</li>
                            <li className='text-sm'>Libro de reclamaciones</li>
                            <li className='text-sm'>Contacto</li>
                            <li className='text-sm'>Normativas</li>
                        </ul>
                    </div>

                    <div className='m-3 xl:pr-16 md:pr-0'>
                        <h2 className='uppercase font-bold text-sm py-4'>Siguenos</h2>
                        <ul className='flex gap-5 items-center'>
                            <Image src={Facebook} alt='facebook' className='h-[20px] w-[20px]'/>
                            <Image src={Instagram} alt='instagram' className='h-[20px] w-[20px]'/>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-primary text-white py-2 md:py-3 text-center text-xs md:text-base w-full">
                Copyright © 2024 Antar Perú | Creado por
            </section>
        </footer>
    )
}