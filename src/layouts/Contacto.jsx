import Enviar from "../assets/enviar.svg";
import Image from "next/image"
import  Autorizado1 from "../assets/autorizado1.svg"
import  Autorizado2 from "../assets/autorizado2.svg"
import  Autorizado3 from "../assets/autorizado3.svg"
import  Autorizado4 from "../assets/autorizado4.svg"
import  Autorizado5 from "../assets/autorizado5.svg"


export const Contacto = () => {
    return(
        <>
            <section id="contact" className="container py-10  md:py-20">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full md:w-[50%] mb-5 md:mb-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3825359095867!2d-76.97861382394673!3d-12.085943442633472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c79f5dacafbf%3A0x2aecf92fd4325f0d!2sJockey%20Plaza!5e0!3m2!1ses-419!2spe!4v1701900426459!5m2!1ses-419!2spe"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <form className="w-full md:w-[50%] container pt-20 md:pt-0">
                        <h2 className="pl-4 md:pl-24 pb-16 text-3xl font-semibold">Contactenos:</h2>
                        <div className="container">
                            <div className="flex flex-col md:flex-row justify-around items-center gap-14 md:gap-20 px-4 md:px-24">
                                <div className="grid gap-3 w-full md:w-1/2 md:mb-5 ">
                                    <label>Nombre:</label>
                                    <input type="text" placeholder="" className="border-b focus:outline-none" />
                                </div>
                                <div className="grid gap-3 w-full md:w-1/2 md:mb-5">
                                    <label>Email:</label>
                                    <input type="text" placeholder="" className="border-b focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-start items-center pl-4 md:pl-24 pt-5">
                            <div className="grid gap-3 w-full">
                                <label>Mensaje:</label>
                                <textarea type="textarea" placeholder="" className="bg-slate-100 h-48 max-h-48 focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex justify-center mb-10 md:mb-0 md:justify-end items-center pl-4 md:pl-24 pt-5">
                            <button type="submit" className="bg-primary text-white rounded-md flex items-center gap-5 p-3 px-5 mt-8">
                                <p>Enviar</p>
                                <Image src={Enviar} alt="Enviar" width={20} height={20} />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="bg-primary">
                <div className="grid md:grid-cols-2 py-12 md:pr-5 xl:pr-0">
                    <div className="grid justify-center">
                        <p className="text-white text-3xl text-center md:text-start">Autorizados por:</p>
                        <div className="flex items-center gap-3 md:gap-5">
                            <Image src={Autorizado1} alt={Autorizado1} className="md:w-28 h-28"/>
                            <Image src={Autorizado2} alt={Autorizado2} className="md:w-28 h-28"/>
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <p className="text-white text-3xl text-center md:text-start">Estamos asociados a:</p>
                        <div className="grid items-center justify-center gap-3 md:flex md:pb-5 md:gap-5">
                            <Image src={Autorizado3} alt={Autorizado1}/>
                            <Image src={Autorizado4} alt={Autorizado2}/>
                            <Image src={Autorizado5} alt={Autorizado3}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}