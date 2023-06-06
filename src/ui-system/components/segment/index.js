import React from "react";
import styled from "styled-components";
import Button from "../button";

const SegmentGroupWrapper = styled.div`
  overflow: auto;
  background-color: var(--c-button);
  padding: 0.2rem;
  border-radius: 10rem;
  display: inline-flex;
  flex-wrap: wrap;
  ${(p) => p.width && `width: ${p.width}`};

  & > button {
    flex: 1;
  }

  ${(grid) =>
    grid.width &&
    `display: grid; border-radius: 10px; grid-template-columns: 1fr 1fr; gap: 0.2rem;
    & > button {
      border-radius: 8px;  
    `};
`;

const SegmentWrapper = styled(Button)`
  &:not(:hover) {
    background-color: ${(p) =>
      p.isSelected ? `var(--c-background)` : `transparent`};
  }

  ${(p) => p.isSelected && `background-color: var(--c-background)`};
  ${(p) => !p.isSelected && `color: var(--c-fade);`};
`;

export const SegmentGroup = ({ children, width, grid }) => {
  return (
    <SegmentGroupWrapper grid={grid} width={width}>
      {children}
    </SegmentGroupWrapper>
  );
};

const Segment = ({ children, isSelected, icon, ...props }) => {
  return (
    <SegmentWrapper icon={icon} isSelected={isSelected} {...props}>
      {children}
    </SegmentWrapper>
  );
};

export default Segment;
