
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blumen-primary">
              <span className="text-blumen-accent">Blumen</span>Pay
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-blumen-dark hover:text-blumen-primary transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-blumen-dark hover:text-blumen-primary transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-blumen-dark hover:text-blumen-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-blumen-dark hover:text-blumen-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex">
            <Button variant="outline" className="mr-4">Sign In</Button>
            <Button className="bg-blumen-accent hover:bg-blumen-primary text-white">Get Started</Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blumen-dark focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-blumen-dark hover:text-blumen-primary px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-blumen-dark hover:text-blumen-primary px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-blumen-dark hover:text-blumen-primary px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-blumen-dark hover:text-blumen-primary px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full bg-blumen-accent hover:bg-blumen-primary text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
