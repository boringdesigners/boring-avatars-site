import React, { useEffect, useRef, useState } from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";
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
  // background-color: #f0eeff;
  background-color: #f4f4f4;
  gap: var(--sp-s);
  padding: var(--sp-m);
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: normal;
  font-size: 0.75rem;

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

  @media (max-width: 1080px) {
    grid-column: 0/1;
  }
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
      <Layout>
        <Sidebar>
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
                Sponsor
              </Button>
            </div>
          </Header>
          <Settings>
            <SegmentGroup width={variantWidth}>
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
            {/* <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily:
                  "SF Mono, SFMono-Regular, ui-monospace, DejaVu Sans Mono",
                border: "1px solid #eaecef",
                borderRadius: "6px",
                zIndex: 1,
              }}
            >
              <CopyBlock
                style={{ fontSize: "0.8rem" }}
                text={`<Avatar
  name="John Doe"
  size={${avatarSize}}
  square={${square}}
  variant="${variant}"
  colors={["${filteredColors[0]}", "${filteredColors[1]}", 
    "${filteredColors[2]}", "${filteredColors[3]}", "${filteredColors[4]}"]}
/>`}
                language={"jsx"}
                theme={atomOneLight}
                showLineNumbers={false}
                wrapLines={false}
                codeBlock
              />
            </div> */}
          </Settings>
          <SidebarFooter>
            <Sponsors href="https://clerk.com?utm_source=boringavatars&utm_medium=web&utm_campaign=sponsorship">
              <header>
                <Avatar size={20} name="Clerk" variant="beam" />
                <span>✨</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  viewBox="0 0 77 24"
                  fill="none"
                >
                  <path
                    d="M35.1481 16.7381C34.7521 17.1486 34.2765 17.4741 33.7505 17.6947C33.2245 17.9154 32.659 18.0265 32.0886 18.0213C31.6069 18.0359 31.1273 17.9517 30.6794 17.7739C30.2315 17.5961 29.8247 17.3285 29.4841 16.9875C28.8654 16.3421 28.5093 15.4206 28.5093 14.3221C28.5093 12.1231 29.941 10.619 32.0886 10.619C32.6646 10.6109 33.2353 10.7301 33.7599 10.968C34.2845 11.206 34.7501 11.5568 35.1234 11.9955L36.9816 10.3525C35.7707 8.8827 33.8059 8.12305 31.9401 8.12305C28.2885 8.12305 25.6992 10.64 25.6992 14.343C25.6992 16.1745 26.3427 17.7167 27.4279 18.8057C28.5131 19.8947 30.0591 20.5344 31.843 20.5344C34.16 20.5344 36.0087 19.5939 37.0463 18.4116L35.1481 16.7381Z"
                    fill="#1F0256"
                  />
                  <path
                    d="M38.7266 3.42773H41.4929V20.3398H38.7266V3.42773Z"
                    fill="#1F0256"
                  />
                  <path
                    d="M54.8179 15.2828C54.8635 14.9145 54.8889 14.5439 54.894 14.1728C54.894 10.6659 52.5979 8.12611 49.0472 8.12611C48.2641 8.11071 47.4861 8.25581 46.7612 8.55246C46.0363 8.84911 45.3797 9.29104 44.832 9.85102C43.7944 10.94 43.1719 12.4822 43.1719 14.3213C43.1719 18.07 45.8144 20.5374 49.3176 20.5374C51.6688 20.5374 53.3614 19.5855 54.3762 18.2947L52.5637 16.6897L52.4742 16.6136C52.1146 17.0634 51.6561 17.4243 51.1344 17.6683C50.6127 17.9123 50.0419 18.0328 49.4661 18.0205C47.6879 18.0205 46.4046 16.9829 46.0391 15.2828H54.8179ZM46.0848 13.0628C46.2083 12.5269 46.4613 12.0295 46.8216 11.614C47.1214 11.2874 47.4883 11.0293 47.897 10.8574C48.3058 10.6856 48.7468 10.604 49.19 10.6183C50.7702 10.6183 51.7602 11.6064 52.101 13.0628H46.0848Z"
                    fill="#1F0256"
                  />
                  <path
                    d="M63.445 8.08984V11.1741C63.1251 11.1494 62.8034 11.1246 62.6073 11.1246C60.513 11.1246 59.325 12.6287 59.325 14.603V20.3394H56.5625V8.2612H59.325V10.0908H59.3498C60.2884 8.80761 61.6344 8.09366 63.1004 8.09366L63.445 8.08984Z"
                    fill="#1F0256"
                  />
                  <path
                    d="M69.8866 15.2812L67.8894 17.5031V20.3398H65.125V3.42773H67.8894V13.8019L72.8224 8.29975H76.1046L71.7638 13.1603L76.1808 20.3398H73.0718L69.938 15.2812H69.8866Z"
                    fill="#1F0256"
                  />
                  <path
                    d="M19.116 3.1608L16.2354 6.04135C16.1449 6.13177 16.0266 6.18918 15.8996 6.20437C15.7725 6.21956 15.6441 6.19165 15.5348 6.12513C14.4017 5.44155 13.0949 5.10063 11.7722 5.14354C10.4495 5.18645 9.16759 5.61134 8.08114 6.36692C7.41295 6.83202 6.83276 7.41221 6.36765 8.0804C5.61297 9.16751 5.18848 10.4495 5.14524 11.7722C5.10201 13.0949 5.44187 14.4019 6.12395 15.536C6.19 15.6451 6.21764 15.7731 6.20246 15.8998C6.18728 16.0264 6.13015 16.1443 6.04018 16.2347L3.15962 19.1152C3.10162 19.1736 3.03168 19.2188 2.95459 19.2476C2.87751 19.2765 2.79511 19.2883 2.71302 19.2824C2.63093 19.2764 2.5511 19.2528 2.479 19.2131C2.40689 19.1734 2.34422 19.1186 2.29527 19.0524C0.736704 16.9101 -0.0687588 14.3121 0.0046021 11.6639C0.077963 9.01568 1.02602 6.46625 2.70079 4.41354C3.21208 3.78549 3.78622 3.21134 4.41428 2.70006C6.46683 1.02574 9.01589 0.0779624 11.6637 0.00460332C14.3115 -0.0687557 16.9091 0.736432 19.0512 2.29453C19.1179 2.34332 19.1731 2.40598 19.2131 2.47818C19.2532 2.55038 19.2771 2.6304 19.2833 2.71274C19.2895 2.79508 19.2777 2.87778 19.2488 2.95513C19.2199 3.03248 19.1746 3.10265 19.116 3.1608Z"
                    fill="url(#paint0_linear_26568_214324)"
                  />
                  <path
                    d="M19.1135 20.8289L16.2329 17.9483C16.1424 17.8579 16.0241 17.8005 15.8971 17.7853C15.7701 17.7701 15.6416 17.798 15.5323 17.8645C14.4639 18.509 13.2398 18.8497 11.9921 18.8497C10.7443 18.8497 9.52022 18.509 8.45181 17.8645C8.34252 17.798 8.21406 17.7701 8.08701 17.7853C7.95997 17.8005 7.84171 17.8579 7.75119 17.9483L4.87063 20.8289C4.81022 20.8869 4.76333 20.9576 4.73329 21.0358C4.70324 21.114 4.69078 21.1979 4.69678 21.2815C4.70277 21.3651 4.72708 21.4463 4.76799 21.5194C4.80889 21.5926 4.86538 21.6558 4.93346 21.7046C6.98391 23.1965 9.45442 24.0001 11.9902 24.0001C14.5259 24.0001 16.9964 23.1965 19.0469 21.7046C19.1152 21.6561 19.172 21.5931 19.2133 21.5201C19.2545 21.4471 19.2792 21.366 19.2856 21.2824C19.2919 21.1988 19.2798 21.1148 19.2501 21.0365C19.2203 20.9581 19.1737 20.8872 19.1135 20.8289V20.8289Z"
                    fill="#1F0256"
                  />
                  <path
                    d="M11.9973 15.4223C13.8899 15.4223 15.4243 13.888 15.4243 11.9953C15.4243 10.1027 13.8899 8.56836 11.9973 8.56836C10.1046 8.56836 8.57031 10.1027 8.57031 11.9953C8.57031 13.888 10.1046 15.4223 11.9973 15.4223Z"
                    fill="#1F0256"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_26568_214324"
                      x1="16.4087"
                      y1="-1.75881"
                      x2="-7.88473"
                      y2="22.5365"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#17CCFC" />
                      <stop offset="0.5" stop-color="#5D31FF" />
                      <stop offset="1" stop-color="#F35AFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </header>
              {/* <svg
                  width="18"
                  viewBox="0 0 24 30"
                  fill="none"
                  alt="Clerk.dev logo"
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
                </svg> */}
              <p>
                Clerk provides drop-in authentication for React and has built-in
                support for Boring Avatars.
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
