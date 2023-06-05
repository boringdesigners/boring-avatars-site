import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  SegmentGroup,
  Segment,
  Button,
  BaseStyles,
  ColorDot,
  AboutDialog,
} from "./ui-system";
import colors from "nice-color-palettes/1000";
import { exampleNames } from "./example-names";
import Avatar from "boring-avatars";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useMedia } from "./hooks";
import { Github, RoundCorner, SquareCorner, Random } from "./icons";
import { useNavigate } from "react-router-dom";

const paletteColors = colors;

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: var(--pagePadding);
  align-items: center;
  grid-gap: var(--sp-m);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const Footer = styled.footer`
  padding: 0 var(--pagePadding) var(--sp-xl);
`;

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: max-content;
  grid-gap: var(--sp-xs);

  @media (max-width: 1080px) {
    grid-column: 0/1;
  }
`;

const AvatarsGrid = styled.div`
  display: grid;
  grid-gap: var(--sp-m);
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  padding: var(--sp-xl) var(--pagePadding);
`;

const ButtonSection = styled.div`
  display: grid;
  place-items: center;
  opacity: 0;
  transition: 0.5s 0s;
`;

const AvatarContainer = styled.div`
  display: grid;
  font-size: 0.8rem;

  &:hover ${ButtonSection} {
    opacity: 1;
    transition: 0.2s 0.1s;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: var(--textbox);
  font: inherit;
  color: inherit;
  border: 1px solid transparent;
  transition: 0.5s;
  width: 100%;
  text-align: center;
  border-radius: 100rem;
  background: transparent;
  margin-top: var(--sp-s);

  &:hover {
    border-color: var(--c-fieldHover);
    transition: 0.2s;
  }

  &:focus {
    border-color: var(--c-fieldFocus);
    outline: none;
  }
`;

const AvatarWrapper = ({ name, playgroundColors, size, variant, square }) => {
  const [avatarName, setAvatarName] = useState(name);
  const handleFocus = (event) => event.target.select();
  const ref = useRef();
  const [copyValue, setCopyValue] = useState(name);

  useEffect(() => {
    if (ref.current) {
      const svgNode = ref.current.innerHTML;
      const svgStart = svgNode.indexOf("<svg");
      const svgEnd = svgNode.indexOf("</svg>") + 6;
      const svgResult = svgNode.substring(svgStart, svgEnd).toString();

      setCopyValue(svgResult);
    }
  }, [copyValue, variant, playgroundColors, avatarName]);

  return (
    <AvatarContainer>
      <AvatarSection className="Avatar" ref={ref}>
        <Avatar
          name={avatarName}
          colors={playgroundColors}
          size={size}
          variant={variants[variant]}
          square={square}
        />
      </AvatarSection>
      <Input
        value={avatarName}
        onChange={(e) => setAvatarName(e.target.value)}
        onFocus={(e) => handleFocus(e)}
      />
      <ButtonSection>
        <CopyToClipboard text={copyValue}>
          <Button>Copy SVG</Button>
        </CopyToClipboard>
      </ButtonSection>
    </AvatarContainer>
  );
};

const getRandomPaletteIndex = () =>
  Math.floor(Math.random() * paletteColors.length);

const avatarSizes = {
  small: 40,
  medium: 80,
  large: 128,
};

const shapes = {
  round: {
    isSquare: false,
    icon: <RoundCorner />,
  },
  square: {
    isSquare: true,
    icon: <SquareCorner />,
  },
};

const PalleteSection = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  grid-template-columns: 1fr auto;
  align-items: center;

  @media (max-width: 1080px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ShapeSelection = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  grid-template-columns: auto auto;
  align-items: center;
`;

const FooterMadeBy = styled.p`
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 600;
    color: ${(p) => p.color};
  }

  small {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-s);
  }

  @media (max-width: 800px) {
    gap: var(--sp-m);
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SizeSection = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  align-items: center;
  grid-template-columns: auto auto auto;

  @media (max-width: 1080px) {
    grid-template-columns: auto auto 1fr;
    justify-content: space-between;
    order: -1;
  }
`;

const variants = {
  beam: "beam",
  marble: "marble",
  pixel: "pixel",
  sunset: "sunset",
  bauhaus: "bauhaus",
  ring: "ring",
};

const Playground = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const sum = day + month + year;

  const randomSeed = sum % 1000;
  const defaultPlaygroundColors = paletteColors[randomSeed];

  const [playgroundColors, setPlaygroundColors] = useState(
    defaultPlaygroundColors
  );

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
    dotColor4,
  ];

  const navigate = useNavigate();

  const handleRandomColors = () => {
    const colorRange = paletteColors[getRandomPaletteIndex()];
    setPlaygroundColors(colorRange);

    const color0 = colorRange[0].replace("#", "");
    const color1 = colorRange[1].replace("#", "");
    const color2 = colorRange[2].replace("#", "");
    const color3 = colorRange[3].replace("#", "");
    const color4 = colorRange[4].replace("#", "");

    navigate(`${color0}-${color1}-${color2}-${color3}-${color4}`);
  };
  useEffect(() => {
    setDotColor0(playgroundColors[0]);
    setDotColor1(playgroundColors[1]);
    setDotColor2(playgroundColors[2]);
    setDotColor3(playgroundColors[3]);
    setDotColor4(playgroundColors[4]);
  }, [playgroundColors]);

  const [avatarSize, setAvatarSize] = useState(avatarSizes.medium);
  const [variant, setVariant] = useState(variants.beam);

  const variantWidth = useMedia(
    ["(max-width: 1080px)", "(min-width: 1080px)"],
    ["100%", "auto"],
    "auto"
  );

  return (
    <>
      <BaseStyles />
      <Header>
        <SegmentGroup width={variantWidth}>
          {Object.keys(variants).map((variantItem, i) => (
            <Segment
              key={i}
              onClick={() => setVariant(variants[variantItem])}
              isSelected={variantItem === variant}
            >
              {variantItem}
            </Segment>
          ))}
        </SegmentGroup>
        <PalleteSection>
          <ColorsSection>
            <ColorDot
              value={dotColor0}
              onChange={(color) => setDotColor0(color)}
            />
            <ColorDot
              value={dotColor1}
              onChange={(color) => setDotColor1(color)}
            />
            <ColorDot
              value={dotColor2}
              onChange={(color) => setDotColor2(color)}
            />
            <ColorDot
              value={dotColor3}
              onChange={(color) => setDotColor3(color)}
            />
            <ColorDot
              value={dotColor4}
              onChange={(color) => setDotColor4(color)}
            />
            <Button
              aria-label="Generate random colors"
              icon={<Random />}
              onClick={() => handleRandomColors()}
            />
          </ColorsSection>
          <ShapeSelection>
            <SegmentGroup>
              {Object.keys(shapes).map((shapeItem, index) => (
                <Segment
                  key={index}
                  onClick={() => setSquare(shapes[shapeItem].isSquare)}
                  isSelected={shapes[shapeItem].isSquare === square}
                  icon={shapes[shapeItem].icon}
                />
              ))}
            </SegmentGroup>
            <SegmentGroup>
              {Object.entries(avatarSizes).map(([key, value], index) => (
                <Segment
                  key={index}
                  onClick={() => setAvatarSize(value)}
                  aria-label={"Change size to " + value}
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
                />
              ))}
            </SegmentGroup>
          </ShapeSelection>
        </PalleteSection>
        <SizeSection>
          <Button
            as="a"
            href="https://github.com/boringdesigners/boring-avatars"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit Github repository"
            icon={<Github />}
          />
          <AboutDialog playgroundColors={filteredColors} variant={variant} />
          <Button
            as="a"
            href="http://www.github.com/sponsors/boringdesigners"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sponsor
          </Button>
        </SizeSection>
      </Header>
      <AvatarsGrid>
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
      </AvatarsGrid>
      <Footer>
        <FooterMadeBy color={dotColor3}>
          <small>
            <span>
              Names from{" "}
              <a
                href="https://notablewomen.withgoogle.com/all"
                target="_blank"
                rel="noreferrer noopener"
              >
                Notable Women
              </a>
              , colors from{" "}
              <a
                href="https://github.com/Jam3/nice-color-palettes"
                target="_blank"
                rel="noreferrer noopener"
              >
                Nice Color Palettes
              </a>
              .
            </span>
          </small>
          <small>
            <a href="https://clerk.com?utm_source=boringavatars&utm_medium=web&utm_campaign=sponsorship">
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8238 3.27783L16.8365 6.26504C16.7427 6.3588 16.62 6.41834 16.4883 6.43409C16.3565 6.44985 16.2233 6.4209 16.11 6.35192C14.9349 5.64303 13.5797 5.28949 12.2081 5.33398C10.8364 5.37848 9.50703 5.81911 8.38035 6.60266C7.68742 7.08498 7.08575 7.68666 6.60342 8.37959C5.82079 9.50695 5.38059 10.8364 5.33575 12.2081C5.29091 13.5798 5.64336 14.9351 6.35069 16.1112C6.41919 16.2244 6.44785 16.3571 6.43211 16.4885C6.41637 16.6198 6.35712 16.7421 6.26382 16.8358L3.27661 19.823C3.21646 19.8835 3.14393 19.9304 3.06399 19.9603C2.98405 19.9902 2.8986 20.0025 2.81347 19.9963C2.72834 19.9901 2.64556 19.9657 2.57079 19.9245C2.49601 19.8833 2.43102 19.8265 2.38025 19.7578C0.763981 17.5362 -0.0713046 14.842 0.0047725 12.0958C0.0808496 9.34949 1.06401 6.70567 2.80079 4.57696C3.33101 3.92565 3.92641 3.33024 4.57772 2.80003C6.70627 1.06372 9.34971 0.080849 12.0956 0.00477376C14.8414 -0.0713015 17.5352 0.763699 19.7566 2.37949C19.8258 2.43008 19.883 2.49506 19.9245 2.56994C19.9661 2.64481 19.9908 2.72779 19.9973 2.81318C20.0037 2.89857 19.9915 2.98433 19.9615 3.06455C19.9315 3.14476 19.8846 3.21753 19.8238 3.27783Z"
                  fill="url(#paint0_linear_1023_320)"
                />
                <path
                  d="M19.8202 21.6001L16.8329 18.6129C16.7391 18.5191 16.6164 18.4596 16.4847 18.4438C16.353 18.4281 16.2197 18.457 16.1064 18.526C14.9984 19.1943 13.729 19.5476 12.4351 19.5476C11.1411 19.5476 9.87172 19.1943 8.76375 18.526C8.65041 18.457 8.5172 18.4281 8.38544 18.4438C8.2537 18.4596 8.13106 18.5191 8.03719 18.6129L5.04997 21.6001C4.98732 21.6603 4.9387 21.7336 4.90755 21.8147C4.87638 21.8958 4.86346 21.9828 4.86968 22.0695C4.8759 22.1562 4.90111 22.2404 4.94353 22.3162C4.98595 22.3921 5.04453 22.4576 5.11513 22.5082C7.2415 24.0554 9.80348 24.8887 12.4332 24.8887C15.0627 24.8887 17.6247 24.0554 19.7511 22.5082C19.822 22.458 19.8809 22.3926 19.9237 22.3169C19.9664 22.2412 19.992 22.1571 19.9987 22.0704C20.0052 21.9837 19.9927 21.8966 19.9619 21.8154C19.931 21.7341 19.8826 21.6606 19.8202 21.6001Z"
                  fill="#1F0256"
                />
                <path
                  d="M12.4416 15.9932C14.4042 15.9932 15.9955 14.4021 15.9955 12.4393C15.9955 10.4766 14.4042 8.8855 12.4416 8.8855C10.4788 8.8855 8.8877 10.4766 8.8877 12.4393C8.8877 14.4021 10.4788 15.9932 12.4416 15.9932Z"
                  fill="#1F0256"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1023_320"
                    x1="17.0162"
                    y1="-1.82393"
                    x2="-8.17668"
                    y2="23.3709"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#17CCFC" />
                    <stop offset="0.5" stop-color="#5D31FF" />
                    <stop offset="1" stop-color="#F35AFF" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <span>
              <a href="https://clerk.com?utm_source=boringavatars&utm_medium=web&utm_campaign=sponsorship">
                Clerk
              </a>{" "}
              provides drop-in authentication for React and has built-in support
              for Boring Avatars.
            </span>
          </small>
          <small>
            <span>
              Made by{" "}
              <a
                href="https://hayk.design/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Hayk An
              </a>{" "}
              and{" "}
              <a
                href="https://josepmartins.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Josep Martins
              </a>
              .
            </span>
          </small>
        </FooterMadeBy>
      </Footer>
    </>
  );
};

export default Playground;
