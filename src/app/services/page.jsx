import Services from '@/components/home/Services';
import React from 'react';
// metadata
export const metadata={
  title:"Services",
  description: "Making caregiving easy, secure, and accessible for every family!"
}
const ServicesPage = () => {
    return (
       <section className="md:w-11/12 mx-auto">
        <Services/>
      </section>
    );
};

export default ServicesPage;