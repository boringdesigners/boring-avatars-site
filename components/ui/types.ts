import { ReactNode } from 'react';

export interface ButtonBaseProps {
  children?: ReactNode;
  icon?: ReactNode;
  as?: 'button' | 'a';
  className?: string;
}

export type ButtonProps = ButtonBaseProps &
  (
    | (Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        keyof ButtonBaseProps
      > & {
        as?: 'button';
      })
    | (Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof ButtonBaseProps
      > & {
        as: 'a';
      })
  );

export interface ColorDotProps {
  value: string;
  onChange: (color: string) => void;
  className?: string;
}

export interface FooterProps {
  colors: string[];
}

export interface SegmentProps {
  children?: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export interface SegmentGroupProps {
  children: ReactNode;
  fullWidth?: boolean;
  width?: string;
  className?: string;
}
