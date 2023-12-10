import Trabajo1 from "../assets/trabajo1.svg"
import Trabajo2 from "../assets/trabajo2.svg"
import Trabajo3 from "../assets/trabajo3.svg"
import Cliente1 from "../assets/cliente1.svg"
import Cliente2 from "../assets/cliente2.svg"
import Cliente3 from "../assets/cliente3.svg"
import Cliente4 from "../assets/cliente4.svg"
import Cliente5 from "../assets/cliente5.svg"
import Cliente6 from "../assets/cliente6.svg"
import Cliente7 from "../assets/cliente7.svg"
import Cliente8 from "../assets/cliente8.svg"
import Cliente9 from "../assets/cliente9.svg"
import Cliente10 from "../assets/cliente10.svg"
import Cliente11 from "../assets/cliente11.svg"
import Cliente12 from "../assets/cliente12.svg"
import Image from "next/image"

export const Clientes = () => {

    const clientes = [Cliente1,Cliente2,Cliente3,Cliente4,Cliente5,Cliente6,Cliente7,Cliente8,Cliente9,Cliente10,Cliente11,Cliente12]

    return(
        <>
            <section className="py-10">
            <div className="flex justify-center items-center py-5 md:py-10">
                <p className="pt-5 text-3xl md:text-5xl font-bold border-b-4 border-primary">Nuestros Clientes</p>
            </div>
                <div className="container">
            <div className="grid grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {clientes.map((cliente, index) => (
                <div key={index} className="flex justify-center items-center">
                    <Image src={cliente} alt={`cliente${index}`} />
                </div>
            ))}
            </div>
            </div>
            </section>
            <section className="container">
                <div className="flex justify-center items-center py-5 md:py-10">
                    <p className="pt-5 text-3xl md:text-5xl font-bold border-b-4 border-primary">Trabajos Realizados</p>
                </div>
                <picture className="grid justify-center gap-5 lg:flex md:justify-evenly md:gap-0">
                    <Image src={Trabajo1} className="w-80 h-80"/>
                    <Image src={Trabajo2} className="w-80 h-80"/>
                    <Image src={Trabajo3} className="w-80 h-80"/>
                </picture>
            </section>
        </>
    )
}