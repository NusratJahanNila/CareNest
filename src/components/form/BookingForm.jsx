'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import {
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaInfoCircle
} from 'react-icons/fa'

import { getSingleService } from '@/actions/server/service'
import { createBooking } from '@/actions/server/booking'

// ────────────────────────────────────────────────
// division from json
import divisionsData from '@/data/divisions.json'
const divisions = divisionsData.divisions
// ────────────────────────────────────────────────
export default function BookingPage () {
  const { data: session, status } = useSession()
  const { id: service_id } = useParams()
  console.log(session)
  const router = useRouter()

  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    duration: { value: '', unit: 'hours' },
    location: { division: '', district: '', city: '', address: '' },
    user: { name: '', email: '', contact: '' },
    notes: ''
  })

  // Prefill from session (runs when session becomes available)
  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setFormData(prev => ({
        ...prev,
        user: {
          name: session.user.name || '',
          email: session.user.email || '',
          contact: session.user.contact || ''
        }
      }))
    }
  }, [status, session])

  // Fetch service 
  useEffect(() => {
    if (!service_id) return

    let mounted = true
    setLoading(true)
    setError(null)

    const fetchData = async () => {
      try {
        const data = await getSingleService(service_id)
        if (!data?._id) throw new Error('Service not found')
        if (mounted) setService(data)
      } catch (err) {
        console.error(err)
        if (mounted) {
          setError('Failed to load service details')
          toast.error('Could not load service')
        }
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchData()

    return () => {
      mounted = false
    }
  }, [service_id])

  // Reset lower location fields when higher changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      location: { ...prev.location, district: '', city: '' }
    }))
  }, [formData.location.division])

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      location: { ...prev.location, city: '' }
    }))
  }, [formData.location.district])

//  division + district 
  const availableDistricts = useMemo(
    () =>
      divisions.find(d => d.id === formData.location.division)?.districts || [],
    [formData.location.division]
  )

  const totalCost = useMemo(() => {
    if (!service || !formData.duration.value) return 0
    const num = Number(formData.duration.value)
    if (isNaN(num) || num <= 0) return 0

    const rate =
      formData.duration.unit === 'hours'
        ? service.pricePerHour
        : service.pricePerDay

    return Math.round(rate * num)
  }, [service, formData.duration.value, formData.duration.unit])

  const handleChange = useCallback((section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }, [])
  //   const handleChange = useCallback((section, field, value) => {
  //     setFormData(prev => {
  //       const newData = { ...prev }

  //       // If division changes, manually reset district and city in one go
  //       if (section === 'location' && field === 'division') {
  //         newData.location = {
  //           ...prev.location,
  //           division: value,
  //           district: '',
  //           city: ''
  //         }
  //       }
  //       // If district changes, reset city
  //       else if (section === 'location' && field === 'district') {
  //         newData.location = {
  //           ...prev.location,
  //           district: value,
  //           city: ''
  //         }
  //       }
  //       // Standard update
  //       else {
  //         newData[section] = {
  //           ...prev[section],
  //           [field]: value
  //         }
  //       }

  //       return newData
  //     })
  //   }, [])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()

      if (!formData.duration.value || Number(formData.duration.value) <= 0) {
        toast.error('Please enter a valid duration')
        return
      }
      if (
        !formData.location.division ||
        !formData.location.district ||
        !formData.location.city ||
        !formData.location.address.trim()
      ) {
        toast.error('Please complete all location fields')
        return
      }

      setShowConfirmation(true)
    },
    [formData]
  )

  const handleConfirmBooking = useCallback(async () => {
    if (!session?.user) {
      toast.error('Session expired. Please login again.')
      router.push('/login')
      return
    }

    setIsSubmitting(true)
    try {
      const bookingData = {
        serviceId: service_id,
        userId:
          session.user.id ||
          session.user._id ||
          session.user.email ||
          'anonymous',
        userName: formData?.user?.name || session?.user?.name || '',
        userEmail: formData?.user?.email || session?.user?.email || '',
        serviceName: service?.title || 'Unknown Service',
        duration: formData.duration,
        location: formData.location,
        totalCost,
        status: 'pending',
        notes: formData.notes.trim() || undefined,
        createdAt: new Date().toISOString()
      }

      await createBooking(bookingData)
      toast.success('Booking placed successfully!')
      setShowConfirmation(false)
      router.push('/my-bookings')
    } catch (err) {
      console.error(err)
      toast.error('Failed to create booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }, [session, service, formData, totalCost, router, service_id])

  if (status === 'loading' || loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Loading...
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/login?redirect=/booking/' + service_id)
    return null
  }

  if (error || !service) {
    return (
      <div className='min-h-screen flex items-center justify-center text-red-600 text-xl'>
        {error || 'Service not found'}
      </div>
    )
  }

  // ────────────────────────────────────────────────
  // Render
  // ────────────────────────────────────────────────

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4 max-w-4xl'>
        {/* ... header ... */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3'>
            Book Your Care Service
          </h1>
          <p className='text-gray-600 text-lg'>
            {service.title} • ৳{service.pricePerHour}/hour or ৳
            {service.pricePerDay}/day
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-2xl shadow-xl p-6 md:p-8'
        >
          {/* Duration section – same as yours */}
          <div className='mb-8'>
            <h2 className='text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2'>
              <FaClock className='text-[#9CAF88]' />
              Service Duration
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Duration <span className='text-red-500'>*</span>
                </label>
                <input
                  type='number'
                  min='1'
                  step='0.5'
                  value={formData.duration.value}
                  onChange={e =>
                    handleChange('duration', 'value', e.target.value)
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
                  placeholder='Enter duration'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Unit <span className='text-red-500'>*</span>
                </label>
                <select
                  value={formData.duration.unit}
                  onChange={e =>
                    handleChange('duration', 'unit', e.target.value)
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
                >
                  <option value='hours'>Hours</option>
                  <option value='days'>Days</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location section */}
          <div className='mb-8'>
            <h2 className='text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2'>
              <FaMapMarkerAlt className='text-[#9CAF88]' />
              Service Location
            </h2>
          </div>
          {/* Division – same */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Division <span className='text-red-500'>*</span>
            </label>
            <select
              value={formData.location.division}
              onChange={e =>
                handleChange('location', 'division', e.target.value)
              }
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
              required
            >
              <option value=''>Select Division</option>
              {divisions.map(div => (
                <option key={div.id} value={div.id}>
                  {div.name}
                </option>
              ))}
            </select>
          </div>

          {/* District – same */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              District <span className='text-red-500'>*</span>
            </label>
            <select
              value={formData.location.district}
              onChange={e =>
                handleChange('location', 'district', e.target.value)
              }
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
              disabled={!formData.location.division}
              required
            >
              <option value=''>Select District</option>
              {availableDistricts.map(district => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          {/* City/Area – use availableAreas instead of availableCities */}
          {/* <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              City / Area <span className='text-red-500'>*</span>
            </label>
            <select
              value={formData.location.city}
              onChange={e => handleChange('location', 'city', e.target.value)}
              disabled={!formData.location.district}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
              required
            >
              <option value=''>Select Area</option>
              {availableAreas.map(area => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div> */}
          {/* City/Area - Text Input */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              City / Area <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              value={formData.location.city}
              onChange={e => handleChange('location', 'city', e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
              placeholder='e.g., Gulshan, Banani, Uttara...'
              required
            />
          </div>

          {/* Address, Notes, Total Cost  */}
          {/* Full Address */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Full Address <span className='text-red-500'>*</span>
            </label>
            <textarea
              value={formData.location.address}
              onChange={e =>
                handleChange('location', 'address', e.target.value)
              }
              rows='3'
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
              placeholder='House, Road, Area details...'
              required
            />
          </div>
          {/* User Info Section (prefilled) */}
          <div className='mb-8'>
            <h2 className='text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2'>
              <FaUser className='text-[#9CAF88]' />
              Your Information
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Full Name
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                    <FaUser className='text-gray-400' />
                  </div>
                  <input
                    type='text'
                    value={formData.user.name}
                    readOnly
                    className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-600'
                  />
                </div>
              </div>

              {/* <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Contact Number
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                    <FaPhone className='text-gray-400' />
                  </div>
                  <input
                    type='tel'
                    value={formData.user.contact}
                    readOnly
                    className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-600'
                  />
                </div>
              </div> */}

              <div className='md:col-span-1'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Email Address
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                    <FaEnvelope className='text-gray-400' />
                  </div>
                  <input
                    type='email'
                    value={formData.user.email}
                    readOnly
                    className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-600'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className='mb-8'>
            <h2 className='text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2'>
              <FaInfoCircle className='text-[#9CAF88]' />
              Additional Notes (Optional)
            </h2>

            <textarea
              value={formData.notes}
              onChange={e =>
                setFormData(prev => ({ ...prev, notes: e.target.value }))
              }
              rows='3'
              className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9CAF88]'
              placeholder='Any special requirements or instructions...'
            />
          </div>

          {/* Total Cost Display */}
          <div className='bg-[#F8FAF4] rounded-xl p-6 mb-6'>
            <div className='flex justify-between items-center'>
              <span className='text-lg font-medium text-gray-700'>
                Total Cost:
              </span>
              <span className='text-3xl font-bold text-[#3b4b21]'>
                ৳{totalCost.toLocaleString()}
              </span>
            </div>
            <p className='text-sm text-gray-500 mt-2'>
              Based on {formData.duration.value || '0'} {formData.duration.unit}{' '}
              at ৳
              {formData.duration.unit === 'hours'
                ? service?.pricePerHour ?? 0
                : service?.pricePerDay ?? 0}
              /{formData.duration.unit}
            </p>
          </div>

          <button
            type='submit'
            className='w-full bg-[#3b4b21] hover:bg-[#2a3718] text-white py-4 rounded-xl text-lg font-semibold transition-colors'
          >
            Review & Confirm Booking
          </button>
        </form>

        {/* Confirmation modal – same, just make sure totalCost is formatted nicely */}
        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-2xl p-8 max-w-md w-full'>
              <h3 className='text-2xl font-bold text-[#2C3E50] mb-4'>
                Confirm Booking
              </h3>

              <div className='space-y-3 mb-6'>
                <p className='text-gray-600'>
                  <span className='font-semibold'>Service:</span>{' '}
                  {service.title}
                </p>
                <p className='text-gray-600'>
                  <span className='font-semibold'>Duration:</span>{' '}
                  {formData.duration.value} {formData.duration.unit}
                </p>
                <p className='text-gray-600'>
                  <span className='font-semibold'>Location:</span>{' '}
                  {formData.location.city}, {formData.location.district}
                </p>
                <p className='text-2xl font-bold text-[#3b4b21]'>
                  Total: ৳{totalCost.toLocaleString()}
                </p>
              </div>

              <div className='flex gap-3'>
                <button
                  onClick={handleConfirmBooking}
                  disabled={isSubmitting}
                  className={`flex-1 bg-[#3b4b21] hover:bg-[#2a3718] text-white py-3 rounded-xl font-semibold ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm'}
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className='flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
