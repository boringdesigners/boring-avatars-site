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

export interface CodeBlockProps {
  code: string;
}

export const BaseStyles: React.FC;
export const Button: React.FC<ButtonProps>;
export const ColorDot: React.FC<ColorDotProps>;
export const Footer: React.FC<FooterProps>;
export const Segment: React.FC<SegmentProps>;
export const SegmentGroup: React.FC<SegmentGroupProps>;
export const CodeBlock: React.FC<CodeBlockProps>;
