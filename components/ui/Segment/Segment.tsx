import React, { ReactNode } from 'react';
import { Button } from '../Button/Button';
import './Segment.css';

interface SegmentGroupProps {
  children: ReactNode;
  width?: string;
  fullWidth?: boolean;
}

interface SegmentProps {
  children?: ReactNode;
  isSelected?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}

export const SegmentGroup: React.FC<SegmentGroupProps> = ({
  children,
  width,
  fullWidth
}) => {
  return (
    <div
      className={`segment-group ${fullWidth ? 'segment-group--full-width' : ''}`}
      style={width ? { width } : undefined}
    >
      {children}
    </div>
  );
};

export const Segment: React.FC<SegmentProps> = ({
  children,
  isSelected,
  icon,
  ...props
}) => {
  return (
    <Button
      className={`segment ${isSelected ? 'segment--selected' : ''} ${children ? ' ' : 'button--icon-only'}`}
      {...props}
    >
      {icon && <span className="segment-icon">{icon}</span>}
      {children}
    </Button>
  );
};
