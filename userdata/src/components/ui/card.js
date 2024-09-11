import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`border rounded shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className }) => {
  return (
    <div className={`bg-gray-100 p-4 ${className}`}>
      {children}
    </div>
  );
};
