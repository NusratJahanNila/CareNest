import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import Banner from '@/components/layouts/Banner'
import About from '@/components/layouts/About'

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
          <Banner></Banner>
        </header>

        {/* main */}
        <main className='py-2 md:w-11/12 mx-auto'>
          <About></About>
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
