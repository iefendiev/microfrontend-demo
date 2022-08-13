import * as React from 'react';

export const Button = ({ children }) => (
  <button style={{ padding: '8px' }}>
    <span>{children}</span>
    <span>Shared UI Button component</span>
  </button>
);
