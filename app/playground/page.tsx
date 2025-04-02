'use client';

import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import colors from 'nice-color-palettes/1000';
import Avatar from 'boring-avatars';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RoundCorner, SquareCorner } from '@/components/ui/icons';
import { exampleNames } from '@/components/ui/example-names';
import {
  SegmentGroup,
  Segment,
  Button,
  ColorDot,
  CodeBlock
} from '@/components/ui';
import './styles.css';

const paletteColors = colors;

type VariantType = 'beam' | 'marble' | 'pixel' | 'sunset' | 'bauhaus' | 'ring';

const variants: Record<VariantType, VariantType> = {
  beam: 'beam',
  marble: 'marble',
  pixel: 'pixel',
  sunset: 'sunset',
  bauhaus: 'bauhaus',
  ring: 'ring'
};

interface AvatarWrapperProps {
  name: string;
  playgroundColors: string[];
  size: number;
  variant: VariantType;
  square: boolean;
}

const AvatarWrapper: React.FC<AvatarWrapperProps> = ({
  name,
  playgroundColors,
  size,
  variant,
  square
}) => {
  const [avatarName, setAvatarName] = useState(name);
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    event.target.select();
  const ref = useRef<HTMLDivElement>(null);
  const [copyValue, setCopyValue] = useState(name);

  useEffect(() => {
    if (ref.current) {
      const svgNode = ref.current.innerHTML;
      const svgStart = svgNode.indexOf('<svg');
      const svgEnd = svgNode.indexOf('</svg>') + 6;
      const svgResult = svgNode.substring(svgStart, svgEnd).toString();

      setCopyValue(svgResult);
    }
  }, [copyValue, variant, playgroundColors, avatarName]);

  return (
    <div className="avatar-container">
      <div className="avatar-section" ref={ref}>
        <Avatar
          name={avatarName}
          colors={playgroundColors}
          size={size}
          variant={variants[variant]}
          square={square}
        />
      </div>
      <input
        className="avatar-input"
        value={avatarName}
        onChange={(e) => setAvatarName(e.target.value)}
        onFocus={(e) => handleFocus(e)}
      />
      <div className="button-section">
        <CopyToClipboard text={copyValue}>
          <Button>Copy SVG</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

const getRandomPaletteIndex = () =>
  Math.floor(Math.random() * paletteColors.length);

const avatarSizes = {
  small: 40,
  medium: 80,
  large: 128
};

const shapes = {
  round: {
    isSquare: false,
    icon: <RoundCorner />
  },
  square: {
    isSquare: true,
    icon: <SquareCorner />
  }
};

export default function Playground() {
  const [playgroundColors, setPlaygroundColors] = useState([
    '#0a0310',
    '#49007e',
    '#ff005b',
    '#ff7d10',
    '#ffb238'
  ]);

  const [dotColor0, setDotColor0] = useState(playgroundColors[0]);
  const [dotColor1, setDotColor1] = useState(playgroundColors[1]);
  const [dotColor2, setDotColor2] = useState(playgroundColors[2]);
  const [dotColor3, setDotColor3] = useState(playgroundColors[3]);
  const [dotColor4, setDotColor4] = useState(playgroundColors[4]);

  const [square, setSquare] = useState(false);

  const filteredColors = [
    dotColor0,
    dotColor1,
    dotColor2,
    dotColor3,
    dotColor4
  ];

  const handleRandomColors = () => {
    const colorRange = paletteColors[getRandomPaletteIndex()];
    setPlaygroundColors(colorRange);
  };

  useEffect(() => {
    setDotColor0(playgroundColors[0]);
    setDotColor1(playgroundColors[1]);
    setDotColor2(playgroundColors[2]);
    setDotColor3(playgroundColors[3]);
    setDotColor4(playgroundColors[4]);
  }, [playgroundColors]);

  const [avatarSize, setAvatarSize] = useState(avatarSizes.medium);
  const [variant, setVariant] = useState<VariantType>('beam');

  const colorsHex = filteredColors.map((color) => `"${color}"`).join(', ');
  const colorsWithoutHash = filteredColors.map((color) => color.slice(1));

  return (
    <>
      <div className="layout">
        <aside className="sidebar">
          <SegmentGroup>
            {(Object.keys(variants) as VariantType[]).map((variantItem, i) => (
              <Segment
                key={i}
                onClick={() => setVariant(variantItem)}
                isSelected={variantItem === variant}
                icon={
                  <Avatar
                    variant={variants[variantItem]}
                    size={20}
                    name={variants[variantItem]}
                    colors={filteredColors}
                  />
                }
              >
                {variantItem}
              </Segment>
            ))}
          </SegmentGroup>
          <div className="colors-section">
            <ColorDot
              value={dotColor0}
              onChange={(color: string) => setDotColor0(color)}
            />
            <ColorDot
              value={dotColor1}
              onChange={(color: string) => setDotColor1(color)}
            />
            <ColorDot
              value={dotColor2}
              onChange={(color: string) => setDotColor2(color)}
            />
            <ColorDot
              value={dotColor3}
              onChange={(color: string) => setDotColor3(color)}
            />
            <ColorDot
              value={dotColor4}
              onChange={(color: string) => setDotColor4(color)}
            />
            <Button onClick={() => handleRandomColors()}>Random</Button>
          </div>
          <div className="shape-selection">
            <SegmentGroup>
              {Object.keys(shapes).map((shapeItem, index) => (
                <Segment
                  key={index}
                  onClick={() =>
                    setSquare(shapes[shapeItem as keyof typeof shapes].isSquare)
                  }
                  isSelected={
                    shapes[shapeItem as keyof typeof shapes].isSquare === square
                  }
                  icon={shapes[shapeItem as keyof typeof shapes].icon}
                ></Segment>
              ))}
            </SegmentGroup>
            <SegmentGroup>
              {Object.entries(avatarSizes).map(([key, value], index) => (
                <Segment
                  key={index}
                  onClick={() => setAvatarSize(value)}
                  aria-label={'Change size to ' + value}
                  isSelected={value === avatarSize}
                  icon={
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <rect
                        width="100%"
                        height="100%"
                        transform-origin="50% 50%"
                        transform={`scale(${(index + 1.2) * 0.28})`}
                        rx={square ? 0 : 40}
                      />
                    </svg>
                  }
                ></Segment>
              ))}
            </SegmentGroup>
          </div>
        </aside>
        <div className="code">
          <div>
            <h2>React component</h2>
            <CodeBlock
              code={`<Avatar name="Mary Edwards" colors={[${colorsHex}]} variant="${variant}" ${
                square ? 'square' : ''
              } size={${avatarSize}}/>`}
            />
          </div>
          <div>
            <h2>
              API service{' '}
              <a href="https://boringdesigners.gumroad.com/l/boring-avatars-service">
                <small>Subscribe</small>
              </a>
            </h2>
            <CodeBlock
              code={`<img src="{YOUR_DOMAIN}/api/avatar?name=Mary%20Edwards&size=${avatarSize}&colors=${colorsWithoutHash}&variant=${variant}${
                square ? '&square' : ''
              }" crossorigin />`}
            />
          </div>
        </div>
        <div>
          <main className="main">
            <div className="avatars-grid">
              {exampleNames.map((exampleName, name) => (
                <AvatarWrapper
                  key={name}
                  size={avatarSize}
                  name={exampleName}
                  playgroundColors={filteredColors}
                  variant={variant}
                  square={square}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
