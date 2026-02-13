// components/ServiceDetailsSkeleton.jsx
import React from 'react';

const ServiceDetailsSkeleton = () => {
  return (
    <main className="bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative bg-linear-to-r from-[#3b4b21]/60 to-[#9CAF88]/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Column - Image Skeleton */}
            <div className="lg:w-1/2">
              <div className="relative h-75 lg:h-100 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200 animate-pulse skeleton"></div>
            </div>

            {/* Right Column - Basic Info Skeleton */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              {/* Category and Availability Skeletons */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-24 h-8 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                <div className="w-28 h-8 bg-gray-200 rounded-full animate-pulse skeleton"></div>
              </div>

              {/* Title Skeleton */}
              <div className="w-3/4 h-12 bg-gray-200 rounded-lg animate-pulse skeleton mb-4"></div>
              <div className="w-full h-20 bg-gray-200 rounded-lg animate-pulse skeleton mb-6"></div>

              {/* Rating and Bookings Skeletons */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse skeleton"></div>
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse skeleton"></div>
              </div>

              {/* Price Card Skeleton */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#9CAF88]/30 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse skeleton mb-2"></div>
                    <div className="flex items-baseline gap-3">
                      <div className="w-32 h-10 bg-gray-200 rounded animate-pulse skeleton"></div>
                    </div>
                    <div className="w-40 h-4 bg-gray-200 rounded animate-pulse skeleton mt-2"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse skeleton"></div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse skeleton"></div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse skeleton"></div>
                  </div>
                </div>
              </div>

              {/* Book Button Skeleton */}
              <div className="w-full h-14 bg-gray-200 rounded-xl animate-pulse skeleton"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Content Skeleton */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About This Service Skeleton */}
              <div className="bg-[#F8FAF4] rounded-2xl p-8">
                <div className="w-48 h-8 bg-gray-200 rounded animate-pulse skeleton mb-4"></div>
                <div className="space-y-3 mb-6">
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                </div>
                
                <div className="w-40 h-6 bg-gray-200 rounded animate-pulse skeleton mb-3"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                      <div className="w-32 h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caregiver Information Skeleton */}
              <div className="bg-white border border-[#9CAF88]/20 rounded-2xl p-8">
                <div className="w-56 h-8 bg-gray-200 rounded animate-pulse skeleton mb-6"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse skeleton"></div>
                    <div>
                      <div className="w-20 h-4 bg-gray-200 rounded animate-pulse skeleton mb-2"></div>
                      <div className="w-32 h-5 bg-gray-200 rounded animate-pulse skeleton"></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse skeleton"></div>
                    <div>
                      <div className="w-20 h-4 bg-gray-200 rounded animate-pulse skeleton mb-2"></div>
                      <div className="w-32 h-5 bg-gray-200 rounded animate-pulse skeleton"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="w-32 h-5 bg-gray-200 rounded animate-pulse skeleton mb-3"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-24 h-8 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="w-32 h-5 bg-gray-200 rounded animate-pulse skeleton mb-3"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-28 h-8 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Section Skeleton */}
              <div className="bg-white border border-[#9CAF88]/20 rounded-2xl p-8">
                <div className="w-56 h-8 bg-gray-200 rounded animate-pulse skeleton mb-6"></div>
                
                <div className="space-y-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                        <div className="flex-1 h-5 bg-gray-200 rounded animate-pulse skeleton"></div>
                      </div>
                      <div className="ml-8 space-y-2">
                        <div className="w-full h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                        <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar Skeleton */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Tags Skeleton */}
              <div className="bg-[#F8FAF4] rounded-2xl p-6">
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse skeleton mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-20 h-8 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us Skeleton */}
              <div className="bg-[#3b4b21]/50 rounded-2xl p-6">
                <div className="w-40 h-7 bg-gray-200 rounded animate-pulse skeleton mb-4"></div>
                <ul className="space-y-3">
                  {[...Array(4)].map((_, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                      <div className="w-32 h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Booking Skeleton */}
              <div className="bg-white border-2 border-[#9CAF88] rounded-2xl p-6">
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse skeleton mb-4"></div>
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse skeleton mb-4"></div>
                <div className="w-full h-12 bg-gray-200 rounded-xl animate-pulse skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section Skeleton */}
      <section className="py-16 bg-[#F8FAF4]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="w-48 h-8 bg-gray-200 rounded animate-pulse skeleton"></div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse skeleton"></div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse skeleton"></div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                  ))}
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse skeleton mb-2"></div>
                <div className="space-y-2 mb-4">
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse skeleton"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse skeleton"></div>
                  <div>
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse skeleton mb-1"></div>
                    <div className="w-32 h-3 bg-gray-200 rounded animate-pulse skeleton"></div>
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

export default ServiceDetailsSkeleton;