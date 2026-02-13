// components/ServiceCard.jsx
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCheckCircle, FaClock, FaUserCheck } from "react-icons/fa";

export default function ServiceCard({ service }) {
  
  const shortDesc = (text, maxLength = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Format price
  const formattedPrice = new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(service.pricePerDay || service.pricePerHour * 8);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#9CAF88]/20 hover:border-[#9CAF88]/50">
      
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#3b4b21]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-lg">
            {service.category}
          </span>
        </div>
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5 ${
            service.availability === "Available" 
              ? "bg-[#9CAF88] text-[#2C3E50]" 
              : "bg-gray-200 text-gray-600"
          }`}>
            <FaCheckCircle className="text-xs" />
            {service.availability}
          </span>
        </div>
      </div>

      {/* Content Container - using soft green background */}
      <div className="p-6 bg-[#F8FAF4]"> {/* Very light green tint */}
        
        {/* Title & Rating */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[#2C3E50] line-clamp-1">
            {service.title}
          </h3>
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg shadow-sm">
            <FaStar className="text-[#FFC107] text-sm" />
            <span className="font-semibold text-[#2C3E50] text-sm">{service.rating}</span>
            <span className="text-gray-400 text-xs">({service.totalReviews})</span>
          </div>
        </div>

        {/* Description - fixed length */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 h-12">
          {shortDesc(service.shortDescription)}
        </p>

        {/* Features Row */}
        <div className="flex items-center gap-3 mb-4">
          {service.caregiverInfo.backgroundVerified && (
            <span className="flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full text-[#3b4b21] border border-[#9CAF88]/30">
              <FaUserCheck className="text-[#9CAF88]" />
              Verified
            </span>
          )}
          {service.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 border border-gray-100">
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#9CAF88]/20 my-4"></div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#3b4b21]">{formattedPrice}</span>
              <span className="text-xs text-gray-500">/day</span>
            </div>
          </div>
          
          <Link href={`/services/${service._id}`}>
            <button className="bg-[#3b4b21] hover:bg-[#2a3718] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}