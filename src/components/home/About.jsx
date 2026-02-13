// components/AboutSection.jsx
import Image from 'next/image'
import { FaHeart, FaShieldAlt, FaHandsHelping, FaHome } from 'react-icons/fa'

export default function About () {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6'>
            Our Mission
          </h2>
          <div className='w-24 h-1 bg-[#9CAF88] mx-auto mb-6'></div>
          <p className='text-lg text-gray-600'>
            Making caregiving{' '}
            <span className='text-[#3b4b21] font-semibold'>
              easy, secure, and accessible
            </span>{' '}
            for every family
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Left Side - Image with Stats */}
          <div className='flex-1 relative'>
            <div className='relative z-10'>
              <Image
                src='https://anniesplace.ca/wp-content/uploads/2019/10/old-lady-with-nurse.jpg'
                alt='Caregiver helping elderly woman'
                width={600}
                height={500}
                className='rounded-2xl shadow-2xl object-cover w-full h-112.5'
              />

              {/* Floating Experience Badge */}
              <div className='absolute -bottom-6 -left-6 bg-[#FADADD] rounded-2xl p-6 shadow-xl'>
                <p className='text-3xl font-bold text-[#3b4b21]'>10+</p>
                <p className='text-sm text-[#2C3E50] font-medium'>
                  Years of Trust
                </p>
              </div>

              {/* Floating Rating Badge */}
              <div className='absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl'>
                <div className='flex items-center gap-2 mb-1'>
                  <FaHeart className='text-[#FADADD] fill-current' />
                  <span className='text-2xl font-bold text-[#3b4b21]'>98%</span>
                </div>
                <p className='text-sm text-gray-600'>Happy Families</p>
              </div>
            </div>

            {/* Decorative Background Shape */}
            <div className='absolute -z-10 top-10 -left-10 w-64 h-64 bg-[#9CAF88]/20 rounded-full blur-3xl'></div>
          </div>

          {/* Right Side - Mission Content */}
          <div className='flex-1'>
            <h3 className='text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6'>
              We Believe Everyone Deserves{' '}
              <span className='text-[#3b4b21]'>Quality Care</span>
            </h3>

            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              CareNest was born from a simple truth: finding trustworthy care
              for your loved ones shouldn`&apos;`t be stressful. We`&apos;`re
              building Bangladesh`&apos;`s most reliable platform that connects
              families with verified, compassionate caregivers.
            </p>

            {/* Mission Points Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className='flex items-start gap-4'>
                <div className='bg-[#9CAF88]/20 p-3 rounded-lg'>
                  <FaShieldAlt className='text-[#3b4b21] text-xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-[#2C3E50] mb-1'>
                    Trusted & Verified
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Every caregiver undergoes background verification
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-[#9CAF88]/20 p-3 rounded-lg'>
                  <FaHeart className='text-[#3b4b21] text-xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-[#2C3E50] mb-1'>
                    Compassionate Care
                  </h4>
                  <p className='text-sm text-gray-500'>
                    We match you with caregivers who truly care
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-[#9CAF88]/20 p-3 rounded-lg'>
                  <FaHome className='text-[#3b4b21] text-xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-[#2C3E50] mb-1'>
                    Care at Home
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Comfortable, familiar environment for your loved ones
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-[#9CAF88]/20 p-3 rounded-lg'>
                  <FaHandsHelping className='text-[#3b4b21] text-xl' />
                </div>
                <div>
                  <h4 className='font-semibold text-[#2C3E50] mb-1'>
                    24/7 Support
                  </h4>
                  <p className='text-sm text-gray-500'>
                    We are always here when you need us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
