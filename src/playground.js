import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  SegmentGroup,
  Segment,
  Button,
  BaseStyles,
  ColorDot,
} from "./ui-system";
import colors from "nice-color-palettes/1000";
import { exampleNames } from "./example-names";
import Avatar from "boring-avatars";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useMedia } from "./hooks";
import { Github, RoundCorner, SquareCorner } from "./icons";
import { useNavigate } from "react-router-dom";

const paletteColors = colors;

const Sponsors = styled.a`
  display: flex;
  flex-direction: column;
  gap: var(--sp-s);
  padding: var(--sp-m);
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: normal;
  font-size: 0.725rem;
  line-height: 1.4;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid var(--c-button);

  &:hover {
    background-color: var(--c-buttonHover);
  }

  header {
    display: flex;
    align-items: center;
    gap: var(--sp-xs);
  }

  p {
    margin: 0;
  }
`;

const Header = styled.header`
  margin-bottom: var(--sp-xl);

  h1 {
    font-size: 0.875rem;
    margin: 0;
    display: inline;
  }

  p {
    display: inline;
  }

  div {
    margin-top: var(--sp-m);
    display: flex;
    align-items: center;
    gap: var(--sp-s);
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  height: 100vh;
  position: sticky;
  top: 0;
  padding: var(--sp-l) var(--sp-l) var(--sp-xl);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono",
    Menlo, Consolas, monospace;
  font-weight: normal;
  font-size: 0.875rem;

  @media (max-width: 500px) {
    justify-content: flex-start;
    height: auto;
    position: relative;
  }
`;

const SidebarFooter = styled.footer`
  margin-top: var(--sp-xl);
`;

const Main = styled.main`
  display: grid;
`;

const Footer = styled.footer`
  padding: var(--sp-m) var(--pagePadding) var(--sp-xl);

  h2 {
    font-size: 0.75rem;
    margin: 0;
  }

  p {
    font-family: "SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono",
      Menlo, Consolas, monospace;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1.5;
  }
`;

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: max-content;
  grid-gap: var(--sp-s);
`;

const AvatarsGrid = styled.div`
  display: grid;
  grid-gap: var(--sp-m);
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  padding: var(--sp-l) var(--pagePadding);
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

const Settings = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--sp-l);
`;

const ShapeSelection = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  grid-template-columns: auto auto;
  align-items: center;
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
  const [playgroundColors, setPlaygroundColors] = useState([
    "#0a0310",
    "#49007e",
    "#ff005b",
    "#ff7d10",
    "#ffb238",
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
      <Layout>
        <Sidebar>
          <div>
            <Header>
              <h1>Boring avatars</h1>{" "}
              <p>
                is an open source React library to generate unique SVG-based
                avatars from usernames and color palettes.
              </p>
              <div>
                <Button
                  as="a"
                  href="https://github.com/boringdesigners/boring-avatars"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visit Github repository"
                  icon={<Github />}
                />
                <Button
                  as="a"
                  href="http://www.github.com/sponsors/boringdesigners"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Become a sponsor
                </Button>
              </div>
            </Header>
            <Settings>
              <SegmentGroup fullWidth width={variantWidth}>
                {Object.keys(variants).map((variantItem, i) => (
                  <Segment
                    key={i}
                    onClick={() => setVariant(variants[variantItem])}
                    isSelected={variantItem === variant}
                    icon={
                      <Avatar
                        variant={variants[variantItem]}
                        size={"28"}
                        name={variants[variantItem]}
                        colors={
                          variantItem === variant ? filteredColors : undefined
                        }
                      />
                    }
                  ></Segment>
                ))}
              </SegmentGroup>
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
                <Button onClick={() => handleRandomColors()}>Random</Button>
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
            </Settings>
          </div>
          <SidebarFooter>
            <Sponsors href="https://clerk.com?utm_source=sponsorship&utm_medium=github&utm_campaign=boringavatars&utm_content=06_12_2023">
              <header>
                <Avatar size={20} name="CLERK" variant="beam" />
                <span>❤️</span>
                <svg
                  width="16"
                  viewBox="0 0 24 30"
                  fill="none"
                  alt="Clerk logo"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7873 3.9332L20.2028 7.51767C20.0902 7.63018 19.943 7.70162 19.785 7.72052C19.6268 7.73943 19.467 7.7047 19.331 7.62192C17.921 6.7713 16.2949 6.34707 14.6489 6.40046C13.003 6.45386 11.4079 6.98258 10.0559 7.9228C9.22444 8.50155 8.50247 9.22352 7.9237 10.055C6.9846 11.4078 6.45638 13.003 6.40257 14.649C6.34878 16.2949 6.77169 17.9213 7.62045 19.3325C7.70264 19.4683 7.73703 19.6276 7.71814 19.7852C7.69925 19.9428 7.62816 20.0895 7.51621 20.202L3.93173 23.7864C3.85956 23.859 3.77253 23.9153 3.6766 23.9511C3.58068 23.9871 3.47815 24.0018 3.376 23.9944C3.27385 23.987 3.17451 23.9576 3.08479 23.9082C2.99506 23.8588 2.91707 23.7906 2.85616 23.7082C0.916731 21.0424 -0.0855612 17.8095 0.00572671 14.5142C0.0970147 11.2188 1.27675 8.0464 3.36078 5.49207C3.99701 4.71055 4.71145 3.99609 5.49299 3.35987C8.04712 1.2764 11.2191 0.097014 14.5139 0.00572822C17.8088 -0.0855575 21.0411 0.916393 23.7067 2.85524C23.7897 2.91595 23.8584 2.99393 23.9082 3.08377C23.9581 3.17361 23.9878 3.27319 23.9955 3.37565C24.0032 3.47811 23.9886 3.58102 23.9526 3.67727C23.9166 3.77352 23.8603 3.86084 23.7873 3.9332Z"
                    fill="url(#paint0_linear_1023_319)"
                  />
                  <path
                    d="M23.7833 25.9189L20.1988 22.3343C20.0862 22.2218 19.939 22.1504 19.7809 22.1315C19.6229 22.1126 19.463 22.1473 19.327 22.2301C17.9975 23.032 16.4743 23.456 14.9217 23.456C13.369 23.456 11.8458 23.032 10.5163 22.2301C10.3803 22.1473 10.2204 22.1126 10.0623 22.1315C9.90423 22.1504 9.75707 22.2218 9.64443 22.3343L6.05995 25.9189C5.98478 25.991 5.92643 26.079 5.88905 26.1763C5.85166 26.2736 5.83616 26.378 5.84362 26.4821C5.85108 26.5861 5.88133 26.6871 5.93223 26.7781C5.98313 26.8692 6.05342 26.9478 6.13814 27.0086C8.68965 28.865 11.7639 29.865 14.9193 29.865C18.0747 29.865 21.1489 28.865 23.7005 27.0086C23.7854 26.9482 23.8561 26.8698 23.9075 26.779C23.9588 26.6881 23.9895 26.5872 23.9975 26.4832C24.0053 26.3792 23.9903 26.2746 23.9533 26.1772C23.9162 26.0796 23.8582 25.9914 23.7833 25.9189Z"
                    fill="#1F0256"
                  />
                  <path
                    d="M14.929 19.1909C17.2841 19.1909 19.1934 17.2816 19.1934 14.9264C19.1934 12.5713 17.2841 10.662 14.929 10.662C12.5738 10.662 10.6646 12.5713 10.6646 14.9264C10.6646 17.2816 12.5738 19.1909 14.929 19.1909Z"
                    fill="#1F0256"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1023_319"
                      x1="20.4185"
                      y1="-2.18861"
                      x2="-9.81152"
                      y2="28.0437"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#17CCFC" />
                      <stop offset="0.5" stop-color="#5D31FF" />
                      <stop offset="1" stop-color="#F35AFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </header>
              <p>
                Adding authentication to your app? <b>Clerk</b> ships with
                built-in support for boring avatars.
              </p>
            </Sponsors>
          </SidebarFooter>
        </Sidebar>
        <div>
          <Main>
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
          </Main>
          <Footer>
            <p>
              Names from{" "}
              <a
                href="https://notablewomen.withgoogle.com/all"
                target="_blank"
                rel="noreferrer noopener"
              >
                Notable Women
              </a>
              , and colors from the{" "}
              <a
                href="https://github.com/Jam3/nice-color-palettes"
                target="_blank"
                rel="noreferrer noopener"
              >
                Nice Color Palettes
              </a>{" "}
              project. Made by{" "}
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
            </p>
          </Footer>
        </div>
      </Layout>
    </>
  );
};

export default Playground;
