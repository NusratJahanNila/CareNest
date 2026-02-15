// app/my-bookings/page.jsx
import { getServerSession } from "next-auth";
import { getUserBookings } from '@/actions/server/booking'
import MyBookingCard from '@/components/cards/MyBookingCard'
import { authOptions } from "@/lib/authOption";

export default async function MyBookingsPage() {
  const session = await getServerSession(authOptions);
  
  // if (!session?.user?.email) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 py-10">
  //       <div className="max-w-5xl mx-auto px-4 text-center">
  //         <p className="text-red-500">Please log in to view your bookings</p>
  //       </div>
  //     </div>
  //   );
  // }

  // Pass the user's email to filter bookings
  const bookings = await getUserBookings(session.user.email);
  
  console.log("my booking for email:", session.user.email, "→", bookings.length, "bookings");

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#2C3E50]">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <p className="text-gray-500">No bookings found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map(booking => (
              <MyBookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}