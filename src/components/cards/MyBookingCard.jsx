// my-bookings/components/MyBookingCard.jsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaRupeeSign,
  FaEye,
  FaTimesCircle,
  FaCheckCircle,
  FaBan,
  FaSpinner,
  FaUser,
  FaTag
} from 'react-icons/fa'
import { updateBookingStatus } from '@/actions/server/booking'
import toast from 'react-hot-toast'

// Status Badge Component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    pending: { color: 'bg-yellow-100 text-yellow-800', icon: FaClock, text: 'Pending' },
    confirmed: { color: 'bg-green-100 text-green-800', icon: FaCheckCircle, text: 'Confirmed' },
    completed: { color: 'bg-blue-100 text-blue-800', icon: FaCheckCircle, text: 'Completed' },
    cancelled: { color: 'bg-red-100 text-red-800', icon: FaBan, text: 'Cancelled' }
  }

  const config = statusConfig[status?.toLowerCase()] || statusConfig.pending
  const Icon = config.icon

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${config.color}`}>
      <Icon className="text-xs" />
      {config.text}
    </span>
  )
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-BD', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function MyBookingCard({ booking, onCancel }) {
  const [cancelling, setCancelling] = useState(false)

  const handleCancel = async () => {
    if (!confirm('Are you sure you want to cancel this booking?')) return
    
    setCancelling(true)
    try {
      const result = await updateBookingStatus(booking._id, 'cancelled')
      if (result) {
        toast.success('Booking cancelled successfully')
        onCancel(booking._id)
      } else {
        toast.error('Failed to cancel booking')
      }
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setCancelling(false)
    }
  }

  const canCancel = booking.status?.toLowerCase() === 'pending'

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden w-full mb-4">
      
      {/* Top Bar - Service Name & Status */}
      <div className="bg-linear-to-r from-[#F8FAF4] to-white px-6 py-4 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-[#9CAF88]/20 p-2 rounded-lg">
              <FaTag className="text-[#3b4b21] text-lg" />
            </div>
            <h3 className="text-xl font-bold text-[#2C3E50]">
              {booking.serviceName || 'Service Booking'}
            </h3>
          </div>
          <StatusBadge status={booking.status} />
        </div>
      </div>

      {/* Main Content - Grid Layout */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Duration */}
          <div className="flex items-start gap-3">
            <div className="bg-[#9CAF88]/10 p-2 rounded-lg">
              <FaClock className="text-[#3b4b21] text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Duration</p>
              <p className="font-semibold text-gray-800 text-lg">
                {booking.duration?.value || 'N/A'} {booking.duration?.unit || 'hours'}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="bg-[#9CAF88]/10 p-2 rounded-lg">
              <FaMapMarkerAlt className="text-[#3b4b21] text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
              <p className="font-semibold text-gray-800">
                {booking.location?.city || 'N/A'}, {booking.location?.district || 'N/A'}
              </p>
              {booking.location?.address && (
                <p className="text-sm text-gray-500 mt-1">{booking.location.address}</p>
              )}
            </div>
          </div>

          {/* Date */}
          <div className="flex items-start gap-3">
            <div className="bg-[#9CAF88]/10 p-2 rounded-lg">
              <FaCalendarAlt className="text-[#3b4b21] text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Booked On</p>
              <p className="font-semibold text-gray-800">
                {formatDate(booking.createdAt)}
              </p>
            </div>
          </div>

          {/* Total Cost */}
          <div className="flex items-start gap-3">
            <div className="bg-[#9CAF88]/10 p-2 rounded-lg">
              <FaRupeeSign className="text-[#3b4b21] text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Total Cost</p>
              <p className="font-bold text-[#3b4b21] text-2xl">
                ৳{booking.totalCost?.toLocaleString() || '0'}
              </p>
            </div>
          </div>
        </div>

        {/* Notes Section (if any) */}
        {booking.notes && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-[#9CAF88]">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Notes:</span> {booking.notes}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-100">
          <Link 
            href={`/services/${booking.serviceId}`} 
            className="flex items-center gap-2 bg-[#9CAF88] hover:bg-[#8A9B76] text-[#2C3E50] px-6 py-2.5 rounded-xl font-medium transition-colors"
          >
            <FaEye />
            View Full Details
          </Link>
          
          {canCancel && (
            <button
              onClick={handleCancel}
              disabled={cancelling}
              className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-6 py-2.5 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {cancelling ? <FaSpinner className="animate-spin" /> : <FaTimesCircle />}
              {cancelling ? 'Cancelling...' : 'Cancel Booking'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}