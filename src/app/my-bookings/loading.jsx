import Logo from "@/components/layouts/Logo";


export default function MyBookingsLoading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="mb-12 animate-pulse">
        <Logo />
      </div>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#9CAF88]/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#3b4b21] rounded-full border-t-transparent animate-spin"></div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading your bookings...
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Please wait while we fetch your booking history
        </p>
      </div>
    </div>
  )
}