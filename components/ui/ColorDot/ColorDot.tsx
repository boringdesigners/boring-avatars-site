import React from 'react';
import { ColorDotProps } from './types';
import './ColorDot.css';

export const ColorDot: React.FC<ColorDotProps> = ({
  value,
  onChange,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      type="color"
      value={value}
      onChange={handleChange}
      className={`color-dot ${className}`}
      style={{ backgroundColor: value }}
    />
  );
};
