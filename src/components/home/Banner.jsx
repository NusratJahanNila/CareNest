// components/Banner.jsx
import Image from 'next/image'

export default function Banner () {
  return (
    <div className='bg-linear-to-br from-[#9CAF88] to-[#B8C9A8]'>
      <section className='relative  overflow-hidden'>
        <div className='md:w-11/12 mx-auto px-4 py-16 md:py-20 lg:py-24'>
          {/* Main Content - Flex Row */}
          <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
            {/* LEFT SIDE - Title, Subtitle, Button */}
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4'>
                CareNest
              </h1>
              <p className='text-2xl md:text-3xl text-[#3b4b21] font-light mb-2'>
                Compassionate care, <span className='text-2xl md:text-3xl text-[#2C3E50] font-semibold mb-8'>
                exceptional results.
              </span>
              </p>
              
              <button className='btn bg-[#3b4b21] hover:bg-[#2a3718] text-white border-none px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105'>
                Find a Caregiver
              </button>
            </div>

            {/* RIGHT SIDE - Image with Stats Below */}
            <div className='flex-1 w-full'>
              <div className='relative'>
                {/* Caregiving Image */}
                <div className='rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src="https://ccrnj.org/wp-content/uploads/2019/07/ccclass.jpg"
                    alt='Compassionate care for children and elderly'
                    width={600}
                    height={400}
                    className='w-full h-auto object-cover'
                    priority
                  />
                </div>

                {/* Stats Row - Bottom of Image (Overlay Style) */}
                <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-center gap-3'>
                  <div className='bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 text-center shadow-xl border border-white/60 flex-1 max-w-45'>
                    <span className='text-2xl md:text-3xl font-bold text-[#3b4b21]'>
                      500+
                    </span>
                    <p className='text-xs md:text-sm text-[#2C3E50] font-medium mt-1'>
                      Happy Families
                    </p>
                  </div>

                  <div className='bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 text-center shadow-xl border border-white/60 flex-1 max-w-45'>
                    <span className='text-2xl md:text-3xl font-bold text-[#3b4b21]'>
                      150+
                    </span>
                    <p className='text-xs md:text-sm text-[#2C3E50] font-medium mt-1'>
                      Expert Caregivers
                    </p>
                  </div>

                  <div className='bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 text-center shadow-xl border border-white/60 flex-1 max-w-45'>
                    <span className='text-2xl md:text-3xl font-bold text-[#3b4b21]'>
                      10+
                    </span>
                    <p className='text-xs md:text-sm text-[#2C3E50] font-medium mt-1'>
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
