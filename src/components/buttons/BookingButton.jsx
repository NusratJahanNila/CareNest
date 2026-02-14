'use client'
// import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaCalendarAlt } from 'react-icons/fa'
const BookingButton = ({ service }) => {
  const isLogin = false;
  const router = useRouter()
  const path = usePathname()

  const bookService = () => {
    if (isLogin) {
      alert(service._id)
    } else {
      // redirect to login
      router.push(`/login?callbackUrl=${path}`)
    }
  }
  return (
    // <Link href={`/booking/${service?._id}`}>
      <button
        onClick={bookService}
        className='w-full bg-[#3b4b21] hover:bg-[#2a3718] text-white py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3'
      >
        <FaCalendarAlt />
        Book This Service
      </button>
    // </Link>
  )
}

export default BookingButton
