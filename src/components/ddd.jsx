import React from 'react';
import Logo1 from '../assets/aim.png';
import Logo2 from '../assets/amal.png';
import Logo3 from '../assets/jet.png';
import Logo4 from '../assets/goal.png';
import Logo5 from '../assets/ino.png';

const Testimonials = () => {
  const testimonials = [
    // ... (keep your testimonials array the same)
  ];

  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const duplicatedLogos = [...logos, ...logos]; // Double the logos for seamless looping

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* ... (keep your header and testimonials grid the same) */}

        {/* News Ticker Style Partners Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-blumen-dark mb-8">
            Our Partners
          </h3>
          
          <div className="relative overflow-hidden py-6 mx-auto" style={{ width: '60%' }}>
            {/* Gradient fade effects on sides */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            <div className="w-full overflow-hidden">
              <div className="flex items-center space-x-8 animate-smooth-scroll">
                {duplicatedLogos.map((logo, index) => (
                  <div key={`logo-${index}`} className="flex-shrink-0">
                    <img 
                      src={logo} 
                      alt="Partner Logo" 
                      className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        .animate-smooth-scroll {
          animation: smoothScroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-smooth-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;