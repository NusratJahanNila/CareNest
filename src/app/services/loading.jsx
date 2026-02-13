import ServiceCard from '@/components/cards/ServiceCard';
import ServiceSkeleton from '@/components/skeleton/ServiceSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
           
            {[...Array(6)].map((_, index) => (
              <ServiceSkeleton key={index} />
            ))}
          
        </div>
    );
};

export default loading;