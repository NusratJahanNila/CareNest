import Link from 'next/link';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        
        {/* 404 Illustration */}
        <div className=" flex justify-center">
          <div className="relative">
            <div className="text-[8rem] md:text-[10rem] font-bold text-[#9CAF88]/20 select-none">
              404
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaExclamationTriangle className="text-6xl md:text-7xl text-[#3b4b21]" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 text-lg mb-3 max-w-md mx-auto">
          Oops! The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="bg-[#3b4b21] hover:bg-[#2a3718] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto">
            <FaHome />
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}