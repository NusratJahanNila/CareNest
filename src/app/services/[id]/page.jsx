import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaStar, 
  FaCheckCircle, 
  FaClock, 
  FaUserCheck, 
  FaShieldAlt, 
  FaAward,
  FaQuoteLeft,
  FaCalendarAlt,
  FaTag,
  FaHeart,
  FaShareAlt,
  FaBookmark
} from 'react-icons/fa';
import { getSingleService } from '@/actions/server/service';

// metadata
export const metadata={
  title:"Service Details",
  description: "Making caregiving easy, secure, and accessible for every family!"
}

const ServiceDetails = async({ params }) => {

    const {id}=await params;
    const service=await getSingleService(id);
    
    // 🟢 ADD THIS: Check if service exists
    if (!service) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Service Not Found</h2>
            <Link href="/" className="text-[#3b4b21] underline">
              Return to Home
            </Link>
          </div>
        </div>
      );
    }
  
    // Format currency
    const formatCurrency = (amount) => {
        if (!amount) return '৳0';
        return new Intl.NumberFormat('en-BD', {
            style: 'currency',
            currency: 'BDT',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    console.log(service); // Debug: check what data you're getting

    return (
        <main className="bg-white">
            {/* Hero Section with Image and Basic Info */}
            <section className="relative bg-linear-to-r from-[#3b4b21]/60 to-[#9CAF88]/30 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        
                        {/* Left Column - Image */}
                        <div className="lg:w-1/2">
                            <div className="relative h-75 lg:h-100 w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={service?.image || '/placeholder.jpg'} // 🟢 Add fallback
                                    alt={service?.title || 'Service image'}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {service?.featured && (
                                    <div className="absolute top-4 left-4 bg-[#3b4b21] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                                        <FaAward />
                                        Featured Service
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Basic Info */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-[#9CAF88] text-[#2C3E50] px-4 py-1.5 rounded-full text-sm font-semibold">
                                    {service?.category}
                                </span>
                                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 ${
                                    service?.availability === "Available" 
                                        ? "bg-green-100 text-green-800" 
                                        : "bg-gray-100 text-gray-600"
                                }`}>
                                    <FaCheckCircle />
                                    {service?.availability}
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
                                {service?.title}
                            </h1>

                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {service?.description}
                            </p>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-[#FFC107]" />
                                        <span className="font-bold text-[#2C3E50]">{service?.rating || 0}</span>
                                    </div>
                                    <span className="text-gray-500">({service?.totalReviews || 0} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-[#9CAF88]" />
                                    <span className="text-gray-600">{service?.totalBookings || 0}+ bookings</span>
                                </div>
                            </div>

                            {/* Price Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#9CAF88]/30 mb-6">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Starting from</p>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-4xl font-bold text-[#3b4b21]">
                                                {formatCurrency(service?.pricePerDay)}
                                            </span>
                                            <span className="text-gray-500">/day</span>
                                        </div>
                                        <p className="text-sm text-gray-400 mt-1">
                                            ৳{service?.pricePerHour || 0}/hour • Minimum 2 hours
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                            <FaHeart className="text-gray-400 hover:text-[#FADADD] text-xl" />
                                        </button>
                                        <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                            <FaShareAlt className="text-gray-400 hover:text-[#9CAF88] text-xl" />
                                        </button>
                                        <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                            <FaBookmark className="text-gray-400 hover:text-[#3b4b21] text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Book Button - 🟢 FIXED with service_id */}
                            <Link href={`/booking/${service?.service_id}`}>
                                <button className="w-full bg-[#3b4b21] hover:bg-[#2a3718] text-white py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3">
                                    <FaCalendarAlt />
                                    Book This Service
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Grid Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            
                            {/* About This Service */}
                            <div className="bg-[#F8FAF4] rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">
                                    About This Service
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service?.description}
                                </p>
                                
                                <h3 className="font-semibold text-[#2C3E50] mb-3">What We Provide:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* 🟢 These are hardcoded - consider making them dynamic from service data */}
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88] text-xl" />
                                        <span className="text-gray-600">Feeding & burping</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88] text-xl" />
                                        <span className="text-gray-600">Diaper changing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88] text-xl" />
                                        <span className="text-gray-600">Sleep monitoring</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88] text-xl" />
                                        <span className="text-gray-600">Bathing & hygiene</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88] text-xl" />
                                        <span className="text-gray-600">Educational play</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88] text-xl" />
                                        <span className="text-gray-600">Light meal prep</span>
                                    </div>
                                </div>
                            </div>

                            {/* Caregiver Information */}
                            <div className="bg-white border border-[#9CAF88]/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">
                                    Caregiver Information
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#9CAF88]/20 p-3 rounded-lg">
                                            <FaUserCheck className="text-[#3b4b21] text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Experience</p>
                                            <p className="font-semibold text-[#2C3E50]">{service?.caregiverInfo?.experience || 'Not specified'}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#9CAF88]/20 p-3 rounded-lg">
                                            <FaShieldAlt className="text-[#3b4b21] text-2xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Background Check</p>
                                            <p className="font-semibold text-[#2C3E50]">
                                                {service?.caregiverInfo?.backgroundVerified ? '✓ Verified' : 'Pending'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="font-semibold text-[#2C3E50] mb-3">Certifications:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service?.caregiverInfo?.certifications?.map((cert, index) => (
                                            <span key={index} className="bg-[#3b4b21]/30 px-4 py-2 rounded-full text-sm text-gray-600 border border-[#3b4b21]/50">
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="font-semibold text-[#2C3E50] mb-3">Special Skills:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service?.caregiverInfo?.specialSkills?.map((skill, index) => (
                                            <span key={index} className="bg-[#9CAF88]/20 px-4 py-2 rounded-full text-sm text-[#2C3E50]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="bg-white border border-[#9CAF88]/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">
                                    Frequently Asked Questions
                                </h2>
                                
                                <div className="space-y-4">
                                    {service?.faqs?.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                                            <h3 className="font-semibold text-[#2C3E50] mb-2 flex items-start gap-2">
                                                <span className="text-[#9CAF88]">Q:</span>
                                                {faq.question}
                                            </h3>
                                            <p className="text-gray-600 ml-6">
                                                <span className="text-[#3b4b21] font-medium">A:</span> {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            
                            {/* Tags */}
                            <div className="bg-[#F8FAF4] rounded-2xl p-6">
                                <h3 className="font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
                                    <FaTag className="text-[#9CAF88]" />
                                    Service Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {service?.tags?.map((tag, index) => (
                                        <span key={index} className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 border border-gray-200">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-[#3b4b21] text-white rounded-2xl p-6">
                                <h3 className="font-semibold text-xl mb-4">Why Choose CareNest?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88]" />
                                        <span>100% verified caregivers</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88]" />
                                        <span>Secure booking system</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88]" />
                                        <span>24/7 customer support</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaCheckCircle className="text-[#9CAF88]" />
                                        <span>Money-back guarantee</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Quick Booking */}
                            <div className="bg-white border-2 border-[#9CAF88] rounded-2xl p-6">
                                <h3 className="font-semibold text-[#2C3E50] mb-4">Need Help?</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Our care advisors are available 24/7 to help you choose the right service.
                                </p>
                                <button className="w-full bg-[#9CAF88] hover:bg-[#8A9B76] text-[#2C3E50] py-3 rounded-xl font-semibold transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-16 bg-[#F8FAF4]">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#2C3E50]">
                            Customer Reviews
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-[#3b4b21]">{service?.rating || 0}</span>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={`${
                                        i < Math.floor(service?.rating || 0) 
                                            ? 'text-[#FFC107]' 
                                            : 'text-gray-300'
                                    }`} />
                                ))}
                            </div>
                            <span className="text-gray-500">({service?.totalReviews || 0} reviews)</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service?.reviews?.map((review, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`${
                                            i < review.rating ? 'text-[#FFC107]' : 'text-gray-300'
                                        } text-sm`} />
                                    ))}
                                </div>
                                <FaQuoteLeft className="text-[#9CAF88]/30 text-2xl mb-2" />
                                <p className="text-gray-600 mb-4">{review.comment}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#9CAF88]/20 rounded-full flex items-center justify-center text-[#3b4b21] font-bold">
                                        {review.name?.charAt(0) || 'U'}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2C3E50]">{review.name}</h4>
                                        <p className="text-xs text-gray-400">
                                            {review.location || 'Bangladesh'} • {review.date ? new Date(review.date).toLocaleDateString('en-BD') : ''}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetails;