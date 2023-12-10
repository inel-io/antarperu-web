import { Inria_Serif } from 'next/font/google'
import './globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const inriaSerif = Inria_Serif({ weight : "400", subsets: ['latin'] })

export const metadata = {
  title: 'Antar Peru',
  description: 'Antar Peru es una empresa dedicada al saneamiento ambiental, desinfección, desratización y desinsectación.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='text-primary'>
      <body className={`${inriaSerif.className}`}>
        <Navbar/> 
          <div>
            {children}
          </div>
        <Footer/>
      </body>
    </html>
  )
}
