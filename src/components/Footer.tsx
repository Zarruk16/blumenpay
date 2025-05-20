
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blumen-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              <span className="text-blumen-primary">Blumen</span>Pay
            </a>
            <p className="mb-4">
              Global payment integration solutions connecting businesses to markets worldwide,
              with special focus on Africa, India, and beyond.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gray-400 hover:bg-white transition-colors"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {['Payment Gateway', 'Rural Access', 'Business Analytics', 'Fraud Protection', 'Multi-currency Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Case Studies', 'Blog', 'Changelog', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Partners', 'Contact', 'Press Kit', 'Legal'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:underline transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BlumenPay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white hover:underline transition-colors">Terms</a>
            <a href="#" className="hover:text-white hover:underline transition-colors">Privacy</a>
            <a href="#" className="hover:text-white hover:underline transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
