import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center'>
      <Link href={'/'}>
        <Image
          src={'/assets/careNest-logo.png'}
          width={80}
          height={20}
          alt='logo'
        />
      </Link>
        <span className='text-xl font-bold text-primary '>Care<span className='text-secondary'>Nest</span></span>
    </div>
  )
}

export default Logo
