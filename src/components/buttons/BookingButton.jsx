'use client'
import { useSession } from 'next-auth/react'
// import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaCalendarAlt } from 'react-icons/fa'
const BookingButton = ({ service }) => {
  const session = useSession()
  const router = useRouter()
  const path = usePathname()
  // const [isLoading, setIsLoading] = useState(false);
  const islogin = session?.status == 'authenticated'

  const handleBookService = () => {
    if (islogin) {
      router.push(`/booking/${service._id}`)
    } else {
      router.push(`/login?callbackUrl=${path}`)
    }
  }
  return (
    <button
      onClick={handleBookService}
      className='w-full bg-[#3b4b21] hover:bg-[#2a3718] text-white py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3'
    >
      <FaCalendarAlt />
      Book This Service
    </button>
  )
}

export default BookingButton
