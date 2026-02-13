import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

const poppings = Poppins({
  weight: ['100', '200', '400', '500', '600', '800']
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppings.className} antialiased`}>
        {/* navbar */}
        <header className=' '>
          <Navbar></Navbar>
        </header>

        {/* main */}
        <main className='py-2 '>
          {children}
        </main>

        {/* footer */}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  )
}
