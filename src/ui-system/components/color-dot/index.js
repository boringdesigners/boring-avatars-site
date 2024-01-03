import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";
import { useOnClickOutside } from "../../../hooks";

const DotWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50px;
  cursor: pointer;
`;

const PickerWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 2rem;
`;

const ColorDot = ({ value, onChange }) => {
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setPickerIsOpen(false));

  return (
    <DotWrapper>
      <Wrapper
        color={value}
        onClick={() => setPickerIsOpen(!pickerIsOpen)}
        style={{ background: value }}
      />
      {pickerIsOpen && (
        <PickerWrapper ref={ref}>
          <ChromePicker
            color={value}
            onChange={(v) => onChange(v.hex)}
            disableAlpha
          />
        </PickerWrapper>
      )}
    </DotWrapper>
  );
};

export default ColorDot;
