import { getUserBookings } from '@/actions/server/booking'
import MyBookingCard from '@/components/cards/MyBookingCard'

export default async function MyBookingsPage({ userEmail }) {
  const bookings= await getUserBookings();
  console.log(bookings)

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#2C3E50]">
          My Bookings
        </h1>

        <div className="space-y-4">
          {bookings.map(booking => (
            <MyBookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      </div>
    </div>
  )
}
