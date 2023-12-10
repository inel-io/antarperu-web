"use client"
import { Clientes } from '../layouts/Clientes'
import { Contacto } from '../layouts/Contacto'
import { Inicio } from '../layouts/Inicio'
import { Servicios } from '../layouts/Servicios'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  return (
    <>
      <Inicio/>
      <Servicios id="clients"/>
      <Clientes/> 
      <Contacto/>
      <FloatingWhatsApp
      accountName="Antar Peru"
      phoneNumber='+51939044095'
      statusMessage="Responderemos a la brevedad posible"
      chatMessage="Hola 👋🏼 ¿En qué podemos ayudarte?"
      placeholder="Escribe un mensaje..."
      avatar="https://scontent.flim15-1.fna.fbcdn.net/v/t39.30808-6/318555567_110202065263657_4669764948787644420_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFlzRuAu7py_wwzNPlF_aW5p4-cPLbeYm6nj5w8tt5ibigrJSOa1aVzm0eMudD6PRdr09yO-7RIyEusCOz3HoEs&_nc_ohc=LQkj9x63V-EAX8nRXa8&_nc_ht=scontent.flim15-1.fna&cb_e2o_trans=t&oh=00_AfCpq8I0fUJI0AqeCsrRsJj4Xx17xE-zu7C9oBiaG5lFdA&oe=65788F93"/>
    </>
  )
}
