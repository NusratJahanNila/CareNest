import Services from '@/components/home/Services';
import React from 'react';
// metadata
export const metadata = {
  title: 'Services',
  description: 'Explore our range of care services: baby care, elderly care, and special needs assistance. Verified caregivers across Bangladesh.',
  openGraph: {
    title: 'CareNest Services - Baby, Elderly & Special Care',
    description: 'Professional care services at home. Book verified caregivers for your loved ones.',
    images: ['https://i.ibb.co.com/wZczy4HW/image.png'],
  },
};
const ServicesPage = () => {
    return (
       <section className="bg-base-200">
        <Services/>
      </section>
    );
};

export default ServicesPage;