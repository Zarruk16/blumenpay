
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    "Seamless integration with local payment systems across Africa and India",
    "Support for multiple currencies and payment methods",
    "Enhanced security with fraud detection and prevention",
    "Real-time transaction monitoring and reporting",
    "Automated reconciliation and settlement",
    "Customizable checkout experience for better conversion"
  ];

  return (
    <section id="benefits" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-1 rounded-lg inline-block mb-4">
              <span className="text-blumen-accent font-medium text-sm px-3 py-1">Why Choose BlumenPay</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blumen-dark mb-6">
              Financial Inclusion Through <span className="text-blumen-primary">Innovative Technology</span>
            </h2>
            <p className="text-gray-600 mb-8">
              BlumenPay bridges the gap between global payment systems and local markets, 
              enabling businesses to reach customers in Africa, India, and worldwide with 
              a single integration. Our platform is designed to simplify complex payment 
              processes while ensuring security, reliability, and accessibility.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-blumen-accent hover:bg-blumen-primary text-white px-8 py-6">
              Learn More
            </Button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-blumen-dark">Financial Inclusion Dashboard</h3>
                <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                  Live Data
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Rural Access</span>
                    <span className="text-sm font-medium text-green-600">+32%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-3/4"></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Transaction Volume</span>
                    <span className="text-sm font-medium text-blue-600">+47%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blumen-primary to-blue-400 w-4/5"></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">User Adoption</span>
                    <span className="text-sm font-medium text-purple-600">+58%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-[85%]"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blumen-primary">35+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blumen-accent">87M+</div>
                  <div className="text-xs text-gray-600">Users</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-600">$2B+</div>
                  <div className="text-xs text-gray-600">Processed</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 -top-10 -left-10"></div>
            <div className="absolute -z-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 -bottom-10 -right-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
