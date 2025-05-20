
import React from 'react';

const BlumenLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-8 h-8 bg-blumen-accent rounded-md mr-2 flex items-center justify-center">
        <span className="text-white font-bold text-xl">B</span>
      </div>
      <span className="text-2xl font-bold">
        <span className="text-blumen-accent">Blumen</span>
        <span className="text-blumen-primary">Pay</span>
      </span>
    </div>
  );
};

export default BlumenLogo;
