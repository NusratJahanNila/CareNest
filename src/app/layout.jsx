import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import NextAuthProvider from '@/provider/NextAuthProvider'
import { Toaster } from 'react-hot-toast'

const poppings = Poppins({
  weight: ['100', '200', '400', '500', '600', '800']
})

// app/layout.jsx
export const metadata = {
  metadataBase: new URL('https://care-nest-kappa.vercel.app'),
  title: {
    template: '%s | CareNest - Trusted Care Services in Bangladesh',
    default: 'CareNest - Babysitting & Elderly Care Services in Bangladesh'
  },
  description:
    'CareNest connects Bangladeshi families with verified caregivers for babysitting, elderly care, and special needs. Easy booking, secure payments, and compassionate service.',
  keywords: [
    'babysitting service Bangladesh',
    'elderly care Bangladesh',
    'caregiver Dhaka',
    'child care service',
    'nursing service at home',
    'patient care Bangladesh',
    'verified nanny service',
    'home care service',
    'CareNest',
    'baby sitter Dhaka'
  ],
  authors: [{ name: 'CareNest Team' }],
  creator: 'CareNest',
  publisher: 'CareNest',

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'CareNest',
    description:
      'Find trusted caregivers for children, elderly, and family members in Bangladesh. Book easily online.',
    url: 'https://carenest.xyz',
    siteName: 'CareNest',
    images: [
      {
        url: 'https://i.ibb.co.com/VcJbdhRq/image.png', // Homepage preview
        width: 1200,
        height: 630,
        alt: 'CareNest - Babysitting & Elderly Care Services'
      },
      {
        url: 'https://i.ibb.co.com/wZczy4HW/image.png', // Service page preview
        width: 1200,
        height: 630,
        alt: 'CareNest Service Booking'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'CareNest - Trusted Care Services in Bangladesh',
    description:
      'Connect with verified caregivers for babysitting, elderly care, and special needs at home.',
    images: ['https://i.ibb.co.com/VcJbdhRq/image.png'], // Homepage preview
    creator: '@carenest',
    site: '@carenest'
  },

  // Icons (using your logo)
  icons: {
    icon: [
      {
        url: 'https://i.ibb.co.com/FkB3CqpS/care-Nest-logo.png',
        type: 'image/png'
      },
      { url: '/favicon.ico' }
    ],
    shortcut: 'https://i.ibb.co.com/FkB3CqpS/care-Nest-logo.png',
    apple: 'https://i.ibb.co.com/FkB3CqpS/care-Nest-logo.png'
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  // Verification (add your Google Search Console verification code)
  verification: {
    google: 'your-google-verification-code'
  },

  // Alternate languages (if you have Bangla version)
  alternates: {
    canonical: 'https://carenest.xyz',
    languages: {
      'en-US': 'https://carenest.xyz/en',
      'bn-BD': 'https://carenest.xyz/bn'
    }
  },

  // Category
  category: 'healthcare'
}

export default function RootLayout ({ children }) {
  return (
    <NextAuthProvider>
      <html lang='en'>
        <body className={`${poppings.className} antialiased`} suppressHydrationWarning={true}>
          {/* navbar */}
          <header className=' '>
            <Navbar></Navbar>
          </header>

          {/* main */}
          <main className='py-2 '>
            {children}
            <Toaster position='top-center' />
          </main>

          {/* footer */}
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  )
}
