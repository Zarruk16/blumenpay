
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BlumenPay has transformed how we process payments across our African operations. The integration was seamless, and we've seen a 40% increase in successful transactions.",
      author: "Sarah Johnson",
      position: "CFO, TechGlobal Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "The rural access features have allowed us to expand our services to previously unreachable areas in rural India. BlumenPay's technology bridged the gap we've been trying to cross for years.",
      author: "Rajesh Patel",
      position: "Director, FinServe India",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "As a multinational company, we needed a unified payment solution. BlumenPay delivered beyond expectations with their all-in-one portfolio that simplified our global payment operations.",
      author: "Michael Chen",
      position: "COO, Global Commerce Partners",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blumen-dark mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about how BlumenPay has transformed their
            payment experiences and expanded their global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-blumen-dark">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
          <img src="https://logoipsum.com/logo/logo-1.svg" alt="Company logo" className="h-8" />
          <img src="https://logoipsum.com/logo/logo-2.svg" alt="Company logo" className="h-8" />
          <img src="https://logoipsum.com/logo/logo-3.svg" alt="Company logo" className="h-8" />
          <img src="https://logoipsum.com/logo/logo-4.svg" alt="Company logo" className="h-8" />
          <img src="https://logoipsum.com/logo/logo-5.svg" alt="Company logo" className="h-8" />
          <img src="https://logoipsum.com/logo/logo-6.svg" alt="Company logo" className="h-8" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
