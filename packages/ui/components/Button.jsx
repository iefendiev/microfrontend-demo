import * as React from 'react';

export const Button = ({ children }) => (
  <button className="px-2 py-1 bg-slate-200 rounded-md shadow-md hover:shadow-lg">
    <span>{children}</span>
  </button>
);
