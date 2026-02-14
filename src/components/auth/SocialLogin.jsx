'use client'
import { signIn } from 'next-auth/react'
import { useParams, useSearchParams } from 'next/navigation'
import { FaGoogle } from 'react-icons/fa'
import Swal from 'sweetalert2'

export const SocialLogin = () => {
  const params = useSearchParams()

  const handleSignIn = async () => {
    const result = await signIn('google', {
      // redirect: "false",
      callbackUrl: params.get('callbackUrl') || '/'
    })
    if (!result.ok) {
      Swal.fire('error', 'Sorry', 'error')
    } else {
      Swal.fire('success', 'Welcome!', 'success')
      router.push('/')
    }
  }

  return (
    <div className='flex gap-3 mt-4'>
      <button
        onClick={handleSignIn}
        className='btn btn-outline btn-error flex-1'
      >
        <FaGoogle className='text-lg' />
        Google
      </button>
    </div>
  )
}
