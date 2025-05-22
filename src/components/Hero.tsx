import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Wallet, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blumen-light to-blue-50 pt-24">
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="container mx-auto px-8 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content - unchanged */}
          <div className="lg:w-1/2 z-10">
            <div className="flex items-center mb-4">
              <div className="bg-blumen-accent/10 rounded-full p-2 mr-3">
                <Globe className="h-5 w-5 text-blumen-accent" />
              </div>
              <span className="text-blumen-accent font-medium">Global Payment Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blumen-dark mb-6 leading-tight">
              Seamless <span className="text-blumen-primary">Global Payments</span> Integration
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Easily access and manage payments through integrated solutions from Africa, India, and worldwide. 
              Connect your business to the global economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-blumen-accent hover:bg-blumen-primary text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-blumen-primary text-blumen-primary hover:bg-blumen-primary/10 px-8 py-6 text-lg">
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">KT</div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs">MR</div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-white text-xs">+</div>
              </div>
              <span>Trusted by 1000+ businesses worldwide</span>
            </div>
          </div>

          {/* Responsive Dashboard */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center z-10">
            <div className="relative w-[90%] max-w-xl md:w-full">
              <div className="animate-float">
                <div className="bg-white shadow-2xl rounded-3xl p-4 sm:p-4 md:p-10 border border-gray-100 w-full">
                  <div className="mb-4 sm:mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blumen-primary to-blumen-accent flex items-center justify-center">
                        <Wallet className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <span className="ml-3 sm:ml-4 text-lg sm:text-xl font-semibold text-blumen-dark">BlumenPay Dashboard</span>
                    </div>
                    <div className="flex">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className="w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-gray-300 ml-1 sm:ml-2"></div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4 sm:mb-6 bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
                    <div className="text-sm sm:text-base md:text-lg text-gray-500 mb-1 sm:mb-2">Global Payment Volume</div>
                    <div className="text-base sm:text-base md:text-2xl font-bold text-blumen-dark">$1,287,634,089.78</div>
                    <div className="mt-2 sm:mt-4 flex justify-between items-center">
                      <div className="h-2 sm:h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blumen-primary to-blumen-accent w-3/4"></div>
                      </div>
                      <span className="ml-2 sm:ml-3 text-xs sm:text-sm md:text-base text-green-600 font-medium">+24%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <div className="bg-blue-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-gray-600">Africa</span>
                        <div className="h-6 w-6 sm:h-8 sm:w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs sm:text-sm text-blue-600 font-medium">↑</span>
                        </div>
                      </div>
                      <div className="text-base sm:text-base md:text-xl font-semibold text-blumen-dark mt-1 sm:mt-2">$20,354,218</div>
                    </div>
                    <div className="bg-purple-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-gray-600">Asia</span>
                        <div className="h-6 w-6 sm:h-8 sm:w-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs sm:text-sm text-purple-600 font-medium">↑</span>
                        </div>
                      </div>
                      <div className="text-base sm:text-base md:text-xl font-semibold text-blumen-dark mt-1 sm:mt-2">$16,467,912</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 md:-bottom-12 md:-right-12 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-5 border border-gray-100 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg font-medium text-blumen-dark">Rural Communities</div>
                    <div className="text-xs sm:text-sm text-green-600">+18.5% access increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 h-2 mt-12 sm:mt-16"></div>
    </div>
  );
};

export default Hero;