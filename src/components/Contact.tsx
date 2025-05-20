
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-blumen-dark text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Global Payments?</h2>
            <p className="text-gray-300 mb-8">
              Connect with our team to learn how BlumenPay can help your business 
              expand globally with seamless payment integration solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blumen-primary">Global Headquarters</h4>
                    <address className="not-italic text-gray-300">
                      123 Financial District<br />
                      London, UK 10001
                    </address>
                  </div>
                  <div>
                    <h4 className="font-medium text-blumen-primary">Africa Operations</h4>
                    <address className="not-italic text-gray-300">
                      456 Tech Park<br />
                      Nairobi, Kenya
                    </address>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:info@blumenpay.com" className="text-blumen-primary hover:underline">info@blumenpay.com</a></p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blumen-primary transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/80"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl p-8 text-blumen-dark">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blumen-primary focus:border-blumen-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blumen-primary focus:border-blumen-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blumen-primary focus:border-blumen-primary"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blumen-primary focus:border-blumen-primary"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blumen-accent hover:bg-blumen-primary text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
