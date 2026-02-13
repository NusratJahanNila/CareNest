import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonial() {
  
  const testimonials = [
    {
      id: 1,
      name: "Rafiq Ahmed",
      location: "Dhaka",
      service: "Baby Care",
      quote: "CareNest has been a blessing for our family. The babysitter we found is amazing with our 2-year-old daughter. Professional, caring, and punctual. Highly recommended!",
      initial: "R",
    },
    {
      id: 2,
      name: "Nasrin Sultana",
      location: "Chattogram",
      service: "Elderly Care",
      quote: "Finding care for my elderly mother was so stressful until I found CareNest. The caregiver is patient, experienced, and genuinely cares. Peace of mind at last!",
      initial: "N",
    },
    {
      id: 3,
      name: "Farzana Islam",
      location: "Sylhet",
      service: "Sick Care",
      quote: "After my husband's surgery, I needed help at home. CareNest arranged a wonderful caregiver within hours. The booking system is so easy and transparent.",
      initial: "F",
    },
    {
      id: 4,
      name: "Shahid Khan",
      location: "Dhaka",
      service: "Baby Care",
      quote: "The verification process gives me confidence. I know my children are in safe hands. The platform is very user-friendly and customer support is excellent.",
      initial: "S",
    },
    {
      id: 5,
      name: "Tanvir Hossain",
      location: "Rajshahi",
      service: "Elderly Care",
      quote: "My father has dementia and needs special attention. The caregiver from CareNest is trained, compassionate, and handles him so well. Grateful for this service.",
      initial: "T",
    },
    {
      id: 6,
      name: "Jannatul Ferdous",
      location: "Khulna",
      service: "Sick Care",
      quote: "Easy booking, fair pricing, and quality caregivers. I've used CareNest three times now and every experience has been excellent. Will definitely book again.",
      initial: "J",
    }
  ];


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3b4b21] font-semibold text-sm uppercase tracking-wider">
            Trusted by families across Bangladesh
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mt-4 mb-6">
            What Families Are Saying
          </h2>
          <div className="w-24 h-1 bg-[#9CAF88] mx-auto"></div>
        </div>


        {/* TESTIMONIALS Grid - 3 cards in a row = MORE PROFESSIONAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="fill-current text-[#FFC107]" />
                ))}
              </div>
              
              {/* Quote Icon */}
              <FaQuoteLeft className="text-3xl text-primary mb-4" />
              
              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-primary rounded-full flex items-center justify-center text-[#3b4b21] font-bold text-xl`}>
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">
                    {testimonial.service} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Join 500+ happy families who trust CareNest</p>
          <button className="btn bg-white border-2 border-[#3b4b21] text-[#3b4b21] hover:bg-[#3b4b21] hover:text-white px-8 py-3 rounded-full transition-all">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
}