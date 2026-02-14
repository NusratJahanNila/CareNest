'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa'
import Logo from '../layouts/Logo'
import Swal from 'sweetalert2'
import { useRouter, useSearchParams } from 'next/navigation'
import { SocialLogin } from "./SocialLogin";

export default function LoginForm () {
    const params = useSearchParams();
    const callBack= params.get('callbackUrl') || "/";
    const router=useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError('Please fill all fields')
      return
    }

    const result = await signIn('credentials', {
      email: formData?.email,
      password: formData?.password,
      redirect: false,
      callbackUrl: params.get('callbackUrl') || '/'
    })
    // console.log(result)
    if(!result.ok){
        Swal.fire("error","Email password not match. Try Google Login / Register","error")
    }
    else{
        Swal.fire("success","Welcome to CareNest!","success")
        router.push(callBack)
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-white'>
      <div className='w-full max-w-md p-6 shadow-xl rounded-2xl border'>
        <div className='text-center mb-6'>
          <Logo />
          <h2 className='text-2xl font-bold mt-4'>Welcome back</h2>
        </div>

        <form className='space-y-4' onSubmit={handleSubmit}>
          {/* Email */}
          <div className='relative'>
            <FaEnvelope className='absolute left-3 top-3 text-gray-400' />
            <input
              type='email'
              placeholder='Email'
              className='w-full pl-10 py-3 border rounded-xl'
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <FaLock className='absolute left-3 top-3 text-gray-400' />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='w-full pl-10 pr-10 py-3 border rounded-xl'
              value={formData.password}
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-3'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <button className='w-full bg-[#3b4b21] text-white py-3 rounded-xl font-semibold'>
            Sign In
          </button>
        </form>
        <SocialLogin></SocialLogin>

        <p className='text-center mt-4 text-sm'>
          Don’t have an account?{' '}
          <Link href={`/register?callbackUrl=${callBack}`} className='font-semibold text-[#3b4b21]'>
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}
