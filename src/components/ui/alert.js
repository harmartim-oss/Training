import React from 'react';

export const Alert = ({ children, className = '' }) => (
  <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}>
    {children}
  </div>
);

export const AlertTitle = ({ children, className = '' }) => (
  <h4 className={`text-blue-900 font-medium ${className}`}>
    {children}
  </h4>
);

export const AlertDescription = ({ children, className = '' }) => (
  <p className={`text-blue-700 text-sm mt-1 ${className}`}>
    {children}
  </p>
);