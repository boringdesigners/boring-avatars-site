import React, { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  as?: 'button' | 'a';
  variant?: 'slim';
  loading?: boolean;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  className = '',
  as = 'button',
  variant,
  loading,
  ...props
}) => {
  if (as === 'a') {
    return (
      <a
        className={`button ${icon && !children ? 'button--icon-only' : ''} ${variant ? `button--${variant}` : ''} ${loading ? 'button--loading' : ''} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <span className="button-icon">{icon}</span>}
        {children && children}
      </a>
    );
  }

  return (
    <button
      className={`button ${icon && !children ? 'button--icon-only' : ''} ${variant ? `button--${variant}` : ''} ${loading ? 'button--loading' : ''} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children && children}
    </button>
  );
};
