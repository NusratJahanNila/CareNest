'use client'
// import { SocialLogin } from "./SocialLogin";
import { useState } from 'react'
import Link from 'next/link'
import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock
} from 'react-icons/fa'
import Logo from '../layouts/Logo'
import { postUser } from '@/actions/server/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { SocialLogin } from './SocialLogin'

export default function RegisterForm () {
  const params = useSearchParams()
  const callBackUrl = params.get('callbackUrl') || '/'
  const router = useRouter()

  const [formData, setFormData] = useState({
    nid: '',
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 🔹 simple reusable validators
  const validators = {
    nid: v =>
      !v
        ? 'NID is required'
        : !/^\d{10,}$/.test(v)
        ? 'NID must be at least 10 digits'
        : '',

    name: v =>
      !v ? 'Name is required' : v.length < 3 ? 'Minimum 3 characters' : '',

    email: v =>
      !v
        ? 'Email is required'
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? 'Invalid email'
        : '',

    contact: v =>
      !v
        ? 'Contact is required'
        : !/^01[3-9]\d{8}$/.test(v)
        ? 'Invalid BD number'
        : '',

    password: v => {
      if (!v) return 'Password required'
      if (v.length < 6) return 'Minimum 6 characters'
      if (!/[A-Z]/.test(v)) return 'Add 1 uppercase'
      if (!/[a-z]/.test(v)) return 'Add 1 lowercase'
      return ''
    },

    confirmPassword: v =>
      v !== formData.password ? 'Passwords do not match' : ''
  }

  const validateAll = () => {
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const err = validators[key](formData[key])
      if (err) newErrors[key] = err
    })
    return newErrors
  }

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))

    // live validation (light)
    if (validators[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validators[name](value)
      }))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const validationErrors = validateAll()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      console.log('Register data:', formData)
      // 👉 redirect later
    }

    const result = await postUser(formData)
    if (result.acknowledged) {
      //   router.push('/login')
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: callBackUrl
      })
      if (!result.ok) {
        Swal.fire('error', 'Email password not match', 'error')
      } else {
        Swal.fire('success', 'Welcome to CareNest!', 'success')
        router.push(callBackUrl)
      }
    }
    alert('Successfull!')
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-white py-10'>
      <div className='w-full max-w-md p-6 shadow-xl rounded-2xl border'>
        <div className='text-center mb-6'>
          <Logo />
          <h2 className='text-2xl font-bold mt-4'>Create an account</h2>
        </div>

        <form className='space-y-4' onSubmit={handleSubmit}>
          {[
            { name: 'nid', icon: <FaIdCard />, placeholder: 'NID Number' },
            { name: 'name', icon: <FaUser />, placeholder: 'Full Name' },
            { name: 'email', icon: <FaEnvelope />, placeholder: 'Email' },
            { name: 'contact', icon: <FaPhone />, placeholder: '01XXXXXXXXX' }
          ].map(field => (
            <div key={field.name} className='relative'>
              <span className='absolute left-3 top-3 text-gray-400'>
                {field.icon}
              </span>
              <input
                type='text'
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className='w-full pl-10 py-3 border rounded-xl'
              />
              {errors[field.name] && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Password */}
          <div className='relative'>
            <span className='absolute left-3 top-3 text-gray-400'>
              <FaLock />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              className='w-full pl-10 pr-10 py-3 border rounded-xl'
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-3'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className='relative'>
            <span className='absolute left-3 top-3 text-gray-400'>
              <FaLock />
            </span>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Password'
              className='w-full pl-10 pr-10 py-3 border rounded-xl'
            />
            <button
              type='button'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-3 top-3'
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button className='w-full bg-[#3b4b21] text-white py-3 rounded-xl font-semibold'>
            Create Account
          </button>
        </form>
        <SocialLogin></SocialLogin>

        <p className='text-center mt-4 text-sm'>
          Already have an account?{' '}
          <Link href='/login' className='font-semibold text-[#3b4b21]'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
