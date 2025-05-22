import React from 'react';
import styles from '../Testimonials.module.css';
import Logo1 from '../assets/aim.png';
import Logo2 from '../assets/amal.png';
import Logo3 from '../assets/jet.png';
import Logo4 from '../assets/goal.png';
import Logo5 from '../assets/ino.png';

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

  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="testimonials" className={styles.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about how BlumenPay has transformed their
            payment experiences and expanded their global reach.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className="p-6">
                <div className={styles.starsContainer}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className={styles.authorImage}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.partnersSection}>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Our Partners
          </h3>
          
          <div className={styles.partnerLogosContainer}>
            <div className={styles.gradientLeft}></div>
            <div className={styles.gradientRight}></div>
            
            <div className={styles.logosWrapper}>
              <div className={styles.logosScroll}>
                {duplicatedLogos.map((logo, index) => (
                  <div key={`logo-${index}`} className="flex-shrink-0">
                    <img 
                      src={logo} 
                      alt="Partner Logo" 
                      className={styles.logoImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;