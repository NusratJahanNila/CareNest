// components/ServiceCardSkeleton.jsx
export default function ServiceSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#9CAF88]/20 animate-pulse">
      
      {/* Image Skeleton */}
      <div className="relative h-48 w-full bg-gray-200 skeleton"></div>

      {/* Content Skeleton - Light green background */}
      <div className="p-6 bg-[#F8FAF4]">
        
        {/* Title & Rating Row */}
        <div className="flex justify-between items-start mb-3">
          <div className="h-7 w-3/5 bg-gray-200 rounded-lg skeleton"></div>
          <div className="h-7 w-16 bg-gray-200 rounded-lg skeleton"></div>
        </div>

        {/* Description Skeleton - 2 lines */}
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gray-200 rounded skeleton"></div>
          <div className="h-4 w-4/5 bg-gray-200 rounded skeleton"></div>
        </div>

        {/* Features Row Skeleton */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-6 w-20 bg-gray-200 rounded-full skeleton"></div>
          <div className="h-6 w-24 bg-gray-200 rounded-full skeleton"></div>
          <div className="h-6 w-16 bg-gray-200 rounded-full skeleton"></div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#9CAF88]/20 my-4"></div>

        {/* Price & CTA Row */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-3 w-20 bg-gray-200 rounded skeleton"></div>
            <div className="h-7 w-28 bg-gray-200 rounded skeleton"></div>
          </div>
          <div className="h-10 w-24 bg-gray-200 rounded-xl skeleton"></div>
        </div>
      </div>
    </div>
  );
}