import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaChevronRight 
} from 'react-icons/fa';

const Footer = () => {
  const socialMedia = [
    { name: 'facebook', icon: <FaFacebookF />, url: '#' },
    { name: 'twitter', icon: <FaTwitter />, url: '#' },
    { name: 'linkedin', icon: <FaLinkedinIn />, url: '#' },
    { name: 'instagram', icon: <FaInstagram />, url: '#' }
  ];

  const products = [
    'Payment Gateway', 
    'Rural Access', 
    'Business Analytics', 
    'Fraud Protection', 
    'Multi-currency Support'
  ];

  const resources = [
    'Documentation', 
    'API Reference', 
    'Case Studies', 
    'Blog', 
    'Changelog', 
    'Support'
  ];

  const company = [
    'About Us', 
    'Careers', 
    'Partners', 
    'Contact', 
    'Press Kit', 
    'Legal'
  ];

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
              with special focus on Africa, Asia, and beyond.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item} className="flex items-center">
                  <FaChevronRight className="text-blumen-primary mr-2 text-xs" />
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
              {resources.map((item) => (
                <li key={item} className="flex items-center">
                  <FaChevronRight className="text-blumen-primary mr-2 text-xs" />
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
              {company.map((item) => (
                <li key={item} className="flex items-center">
                  <FaChevronRight className="text-blumen-primary mr-2 text-xs" />
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