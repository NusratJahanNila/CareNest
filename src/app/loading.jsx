import Logo from "@/components/layouts/Logo";


export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      
      {/* Logo Component */}
      <div className="mb-8 animate-pulse">
        <Logo />
      </div>

      {/* Loading Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#9CAF88]/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#3b4b21] rounded-full border-t-transparent animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-gray-500 text-lg animate-pulse">
        Loading...
      </p>
    </div>
  );
}