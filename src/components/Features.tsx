
import React from 'react';
import { Globe, Wallet, Users, Briefcase, Dollar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Dollar className="feature-icon" />,
      title: "Advanced Revenue Collection",
      description: "Efficient revenue collection, cash synergies, and automated reconciliation tailored for organizations."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Reach Rural Communities",
      description: "Expand financial access to rural populations, promoting inclusion through innovative technology."
    },
    {
      icon: <Briefcase className="feature-icon" />,
      title: "All-in-One Portfolio",
      description: "Comprehensive financial services promoting inclusion through innovative technologies."
    },
    {
      icon: <Globe className="feature-icon" />,
      title: "Global Reach",
      description: "Connect with payment systems across Africa, India, and worldwide with seamless integration."
    },
    {
      icon: <Wallet className="feature-icon" />,
      title: "Unified Payment Gateway",
      description: "Single API integration for multiple payment methods and currencies across regions."
    },
    {
      icon: <Briefcase className="feature-icon" />,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting for optimized payment processing and customer insights."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blumen-dark mb-4">
            Global Payment Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BlumenPay provides comprehensive payment integration solutions connecting businesses 
            to global markets with focus on Africa, India, and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 text-blumen-primary group-hover:text-blumen-accent transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blumen-dark group-hover:text-blumen-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
