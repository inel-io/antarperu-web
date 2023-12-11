import { CardService } from "../components/CardService"

export const Servicios = () => {
    return(
        <section id="services">
            <div className="container py-16">
                <aside className="flex justify-center items-center pb-16">
                    <p className="text-3xl md:text-5xl font-bold border-b-4 border-primary">Nuestro Servicios</p>
                </aside>
                <article className="grid gap-1 pt-10">
                    <CardService
                    servicio={"Saneamiento Ambiental"}
                    detalle={"Desinfección, Desratización y Desinsectación "}/>
                    <CardService
                    servicio={"Saneamiento Ambiental"}
                    detalle={"Desinfección, Desratización y Desinsectación "}/>
                    <CardService
                    servicio={"Saneamiento Ambiental"}
                    detalle={"Desinfección, Desratización y Desinsectación "}/>
                    <CardService
                    servicio={"Saneamiento Ambiental"}
                    detalle={"Desinfección, Desratización y Desinsectación "}/>
                    <CardService
                    servicio={"Saneamiento Ambiental"}
                    detalle={"Desinfección, Desratización y Desinsectación "}/>
                    <CardService
                    servicio={"Saneamiento Ambiental"}
                    detalle={"Desinfección, Desratización y Desinsectación "}/>
                    <CardService
                    servicio={"Saneamiento Ambiental"}
                    detalle={"Desinfección, Desratización y Desinsectación "}/>
                </article>
            </div>
            <div className="pt-5">
                <div className="bg-services bg-cover bg-center h-[40rem] grid items-center justify-center md:justify-start md:pl-[20%]">
                    <p className="text-white text-5xl md:text-7xl font-bold xl:text-9xl container">
                        Brindamos <br/>
                        Seguridad y <br/>
                        Confianza
                    </p>
                </div>
            </div>
        </section>
    )
}