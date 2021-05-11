import React from 'react'
import styled from 'styled-components'
import Button from '../button'

const SegmentGroupWrapper = styled.div`
  background-color: var(--c-button);
  padding: 0.2rem;
  border-radius: 10rem;
  display: inline-flex;
  ${p => p.width && `width: ${p.width}`};
`

const SegmentWrapper = styled(Button)`
  &:not(:hover) {
    background-color: ${p => p.isSelected ? `var(--c-background)` : `transparent`};
  }

  ${p => p.isSelected && `background-color: var(--c-background)`};
  ${p => !p.isSelected && `color: var(--c-fade)`};
`

export const SegmentGroup = ({ children, width }) => {
  return (
    <SegmentGroupWrapper width={width}>{children}</SegmentGroupWrapper>
  )
}

const Segment = ({ children, isSelected, hasFullWidth, icon, ...props }) => {
  return (
    <SegmentWrapper icon={icon} isSelected={isSelected} {...props}>{children}</SegmentWrapper>
  )
}

export default Segment