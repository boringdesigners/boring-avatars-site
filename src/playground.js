import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SegmentGroup, Segment, Button, BaseStyles, ColorDot } from './ui-system'
import colors from 'nice-color-palettes'
import { exampleNames } from './example-names'
import Avatar from 'boring-avatars'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useMedia } from './hooks'

const paletteColors = colors

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: var(--pagePadding);
  align-items: center;
  grid-gap: var(--sp-s);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    background-color: var(--c-backgroundAlt);
  }
`

const ColorsSection = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: max-content;
  grid-gap: var(--sp-xs);
  
  @media (max-width: 800px) {
    grid-column: 0/1;
  }
`

const AvatarsGrid = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  padding: var(--pagePadding);
`

const ButtonSection = styled.div`
  display: grid;
  place-items: center;
  opacity: 0;
`

const AvatarContainer = styled.div`
  display: grid;
  padding: 0 var(--sp-m);
  font-size: 0.8rem;

  &:hover ${ButtonSection} {
    opacity: 1;
  }
`

const AvatarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

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
`

const AvatarWrapper = ({ name, playgroundColors, size, variant }) => {
  const [avatarName, setAvatarName] = useState(name)
  const handleFocus = (event) => event.target.select()
  const ref = useRef();
  const [copyValue, setCopyValue] = useState(name)
  
  useEffect(() => {
    if(ref.current) {
      const svgNode = ref.current.innerHTML
      const svgStart = svgNode.indexOf('<svg')
      const svgEnd = svgNode.indexOf('</svg>') + 6
      const svgResult = svgNode.substring(svgStart, svgEnd).toString()
      
      setCopyValue(svgResult)
    }
  }, [copyValue, variant, playgroundColors])

  return (
    <AvatarContainer>
      <AvatarSection className="Avatar" ref={ref}>
        <Avatar
          name={avatarName}
          colors={playgroundColors}
          size={size}
          variant={variants[variant]}
        />
      </AvatarSection>
      <Input
        value={avatarName}
        onChange={e => setAvatarName(e.target.value)}
        onFocus={(e) => handleFocus(e)}
      />
      <ButtonSection>
        <CopyToClipboard text={copyValue}>
          <Button
            icon={
              <svg width={16} height={16} fill="none">
                <rect
                  x={5}
                  y={5}
                  width={10}
                  height={10}
                  rx={2}
                  stroke="currentColor"
                  strokeWidth={2}
                />
                <path
                  d="M11 3v0a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2v0"
                  stroke="currentColor"
                  strokeWidth={2}
                />
              </svg>
            }
          />
        </CopyToClipboard>
      </ButtonSection>
    </AvatarContainer>
  )
}

const getRandomPaletteIndex = () => Math.floor(Math.random() * paletteColors.length)

const avatarSizes = {
  small: 32,
  medium: 80,
  large: 128,
}

const SizeDotWrapper = styled(Button)`
  ${p => p.isSelected && `background-color: var(--c-background)`};
  ${p => !p.isSelected && `color: var(--c-fade)`};

  &:hover {
    ${p => p.isSelected && `background-color: var(--c-background)`};
  }
`

const Dot = styled.div`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background-color: currentColor;
  border-radius: 10rem;
`

const PalleteSection = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  grid-template-columns: 1fr auto;

  @media (max-width: 800px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`

const SizeSection = styled.div`
  display: grid;
  grid-gap: var(--sp-s);
  align-items: center;
  grid-template-columns: auto auto auto;

  @media (max-width: 800px) {
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
  }
`

const SizeDot = ({size, isSelected, ...props}) => {
  const getSize = () => {
    switch(size) {
      case avatarSizes.small:
        return 8
      case avatarSizes.medium:
        return 14
      case avatarSizes.large:
        return 20
      default:
        return 0
    }
  }
  return(
    <SizeDotWrapper isSelected={isSelected} icon={<Dot size={getSize()}/>} {...props} />
  )
}

const variants = {
  geometric: 'geometric',
  abstract: 'abstract',
  marble: 'marble',
  beam: 'beam'
}

const Playground = () => {
  const defaultPlaygroundColors = paletteColors[66]
  const [playgroundColors, setPlaygroundColors] = useState(defaultPlaygroundColors)

  const [darkMode, setDarkMode] = useState(false)
  const [dotColor0, setDotColor0] = useState(playgroundColors[0])
  const [dotColor1, setDotColor1] = useState(playgroundColors[1])
  const [dotColor2, setDotColor2] = useState(playgroundColors[2])
  const [dotColor3, setDotColor3] = useState(playgroundColors[3])
  const [dotColor4, setDotColor4] = useState(playgroundColors[4])

  const filteredColors = [dotColor0, dotColor1, dotColor2, dotColor3, dotColor4]

  const handleRandomColors = () => {
    setPlaygroundColors(
      paletteColors[getRandomPaletteIndex()]
    )
  }

  useEffect(() => {
    setDotColor0(playgroundColors[0])
    setDotColor1(playgroundColors[1])
    setDotColor2(playgroundColors[2])
    setDotColor3(playgroundColors[3])
    setDotColor4(playgroundColors[4])
  }, [playgroundColors])

  const [avatarSize, setAvatarSize] = useState(avatarSizes.medium)
  const [variant, setVariant] = useState(variants.geometric)

  const variantWidth = useMedia(
    ['(max-width: 800px)', '(min-width: 800px)'],
    ['100%', 'auto'],
    'auto'
  );
  
  const randomLabel = useMedia(
    ['(max-width: 800px)', '(min-width: 800px)'],
    ['Random', 'Random palette'],
    'Random'
  );

  return (
    <>
      <BaseStyles darkMode={darkMode} />
      <Header>
        <SegmentGroup width={variantWidth}>
          {Object.keys(variants).map((variantItem) => (
            <Segment onClick={() => setVariant(variants[variantItem])} isSelected={variantItem === variant}>{variantItem}</Segment>
          ))}
        </SegmentGroup>
        <PalleteSection>
          <ColorsSection>
            <ColorDot value={dotColor0} onChange={(color) => setDotColor0(color)} />
            <ColorDot value={dotColor1} onChange={(color) => setDotColor1(color)} />
            <ColorDot value={dotColor2} onChange={(color) => setDotColor2(color)} />
            <ColorDot value={dotColor3} onChange={(color) => setDotColor3(color)} />
            <ColorDot value={dotColor4} onChange={(color) => setDotColor4(color)} />
          </ColorsSection>
          <Button onClick={() => handleRandomColors()}>{randomLabel}</Button>
        </PalleteSection>
        <SizeSection>
          <SegmentGroup>
            {Object.entries(avatarSizes).map(([key, value], index) => (
              <SizeDot
                key={index}
                onClick={() => setAvatarSize(value)}
                isSelected={value === avatarSize}
                size={value}
              />
            ))}
          </SegmentGroup>

          <Button
            onClick={() => setDarkMode(!darkMode)}
            icon={
              <svg width={20} height={20} fill="none">
                <circle cx={10} cy={10} r={9} stroke="currentColor" strokeWidth={2} />
                <path d="M10 0a10 10 0 000 20V0z" fill="currentColor" />
              </svg>
            }
          />
          
          <Button
            as="a"
            href="https://github.com/boringdesigners/boring-avatars"
            target="_blank"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="currentColor"/>
              </svg>
            }
          />

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
          />
        ))}
      </AvatarsGrid>
    </>
  )
}

export default Playground