'use client'

import { useEffect, useState } from 'react'
import colors from 'nice-color-palettes/1000'
import Avatar from 'boring-avatars'
import { RoundCorner, SquareCorner, RandomColors } from '@/components/ui/icons'
import { SegmentGroup, Segment, Button, ColorDot } from '@/components/ui'
import { Example } from '@/components/ui-system'
import {
  nameProfile,
  nameInstagram,
  nameUpload,
  nameUploadLikes,
  dataList,
  dataTwitter,
  dataSuggested,
  dataShared,
  playgroundExampleImages
} from '@/components/ui/example-data'
import './styles.css'

const paletteColors = colors

type VariantType = 'beam' | 'marble' | 'pixel' | 'sunset' | 'bauhaus' | 'ring'

const variants: Record<VariantType, VariantType> = {
  beam: 'beam',
  marble: 'marble',
  pixel: 'pixel',
  sunset: 'sunset',
  bauhaus: 'bauhaus',
  ring: 'ring'
}

const getRandomPaletteIndex = () => Math.floor(Math.random() * paletteColors.length)

const shapes = {
  round: {
    isSquare: false,
    icon: <RoundCorner />
  },
  square: {
    isSquare: true,
    icon: <SquareCorner />
  }
}

export function Playground() {
  const [playgroundColors, setPlaygroundColors] = useState(["#00686c", "#32c2b9", "#edecb3", "#fad928", "#ff9915"])

  const [dotColor0, setDotColor0] = useState(playgroundColors[0])
  const [dotColor1, setDotColor1] = useState(playgroundColors[1])
  const [dotColor2, setDotColor2] = useState(playgroundColors[2])
  const [dotColor3, setDotColor3] = useState(playgroundColors[3])
  const [dotColor4, setDotColor4] = useState(playgroundColors[4])

  const [square, setSquare] = useState(false)

  const filteredColors = [dotColor0, dotColor1, dotColor2, dotColor3, dotColor4]

  const handleRandomColors = () => {
    const colorRange = paletteColors[getRandomPaletteIndex()]
    setPlaygroundColors(colorRange)
  }

  useEffect(() => {
    setDotColor0(playgroundColors[0])
    setDotColor1(playgroundColors[1])
    setDotColor2(playgroundColors[2])
    setDotColor3(playgroundColors[3])
    setDotColor4(playgroundColors[4])
  }, [playgroundColors])

  const [variant, setVariant] = useState<VariantType>('beam')

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="type-selection">
          <SegmentGroup>
            {(Object.keys(variants) as VariantType[]).map((variantItem, i) => (
              <Segment
                key={i}
                onClick={() => setVariant(variantItem)}
                isSelected={variantItem === variant}
                icon={
                  <Avatar
                    variant={variants[variantItem]}
                    size={24}
                    name={variants[variantItem]}
                    colors={filteredColors}
                  />
                }
              ></Segment>
            ))}
          </SegmentGroup>
        </div>
        <div className="colors-selection">
          <ColorDot value={dotColor0} onChange={(color: string) => setDotColor0(color)} />
          <ColorDot value={dotColor1} onChange={(color: string) => setDotColor1(color)} />
          <ColorDot value={dotColor2} onChange={(color: string) => setDotColor2(color)} />
          <ColorDot value={dotColor3} onChange={(color: string) => setDotColor3(color)} />
          <ColorDot value={dotColor4} onChange={(color: string) => setDotColor4(color)} />
          <Button onClick={() => handleRandomColors()} icon={<RandomColors />} aria-label="Random colors" />
        </div>
        <div className="shape-selection">
          <SegmentGroup>
            {Object.keys(shapes).map((shapeItem, index) => (
              <Segment
                key={index}
                onClick={() => setSquare(shapes[shapeItem as keyof typeof shapes].isSquare)}
                isSelected={shapes[shapeItem as keyof typeof shapes].isSquare === square}
                icon={shapes[shapeItem as keyof typeof shapes].icon}
              ></Segment>
            ))}
          </SegmentGroup>
        </div>
      </aside>
      <div>
        <main className="main">
          <section className="playground-examples">
            <Example
              colors={filteredColors}
              variant={variant}
              square={square}
              imgProfile={playgroundExampleImages.imgProfile}
              imgUpload={playgroundExampleImages.imgUpload}
              nameProfile={nameProfile}
              nameInstagram={nameInstagram}
              nameUpload={nameUpload}
              nameUploadLikes={nameUploadLikes}
              dataList={dataList}
              dataTwitter={dataTwitter}
              dataSuggested={dataSuggested}
              dataShared={dataShared}
            />
          </section>
        </main>
      </div>
    </div>
  )
}
