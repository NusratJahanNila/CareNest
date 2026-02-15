// components/HowItWorks.jsx
import React from 'react';
import { FaSearch, FaCalendarCheck, FaHeart, FaHandsHelping } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearch className="text-3xl text-white" />,
      title: "Find a Caregiver",
      description: "Browse verified caregivers based on your needs - baby care, elderly care, or special assistance."
    },
    {
      id: 2,
      icon: <FaCalendarCheck className="text-3xl text-white" />,
      title: "Book & Schedule",
      description: "Select duration, choose your location, and book instantly with our easy booking system."
    },
    {
      id: 3,
      icon: <FaHeart className="text-3xl text-white" />,
      title: "Get Matched",
      description: "We match you with the perfect caregiver based on your requirements and preferences."
    },
    {
      id: 4,
      icon: <FaHandsHelping className="text-3xl text-white" />,
      title: "Relax & Enjoy",
      description: "Receive compassionate care while you relax. We handle everything with love."
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3b4b21] font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mt-4 mb-6">
            How CareNest Works
          </h2>
          <div className="w-24 h-1 bg-[#9CAF88] mx-auto"></div>
        </div>

        {/* Steps with Dotted Lines */}
        <div className="relative flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-4 lg:gap-8">
          
          {/* Dotted Line Connector (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-[#9CAF88] z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 flex-1 text-center group">
              
              {/* Step Number Circle */}
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 bg-linear-to-br from-[#3b4b21] to-[#9CAF88] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FADADD] rounded-full flex items-center justify-center font-bold text-[#3b4b21] border-2 border-white shadow-md">
                  {step.id}
                </div>
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Mobile Dotted Lines (Vertical) */}
              {index < steps.length - 1 && (
                <div className="md:hidden my-4 flex justify-center">
                  <div className="w-0.5 h-12 border-l-2 border-dashed border-[#9CAF88]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;