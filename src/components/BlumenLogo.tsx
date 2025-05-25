
import React from 'react';
import blumenLogo from '../assets/logo2.svg'; // Make sure this path is correct

const BlumenLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="  mr-2 flex items-center justify-center">
         <a href="#" className="flex items-center">
                      <img 
                        src={blumenLogo} 
                        alt="Blumen Logo" 
                        className="h-8 w-auto" // Adjust size as needed
                      />
                    </a>
      </div>
      <span className="text-2xl font-bold">
        <span className="text-blumen-accent">Blumen</span>
        <span className="text-blumen-primary">Pay</span>
      </span>
    </div>
  );
};

export default BlumenLogo;
