"use client"
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function Error() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
          Something Went Wrong !!
        </h1>

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