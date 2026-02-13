import React from 'react'
// import services from "@/data/service.json"
import ServiceCard from '../cards/ServiceCard'
import { getServices } from '@/actions/server/service'

const Services = async() => {
    const services=(await getServices()) || [];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#3b4b21] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mt-4 mb-6">
            Trusted Care for Every Need
          </h2>
          <div className="w-24 h-1 bg-[#9CAF88] mx-auto"></div>
        </div>

        {/* Services Grid - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.service_id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
