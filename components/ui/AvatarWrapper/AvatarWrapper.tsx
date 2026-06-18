'use client'

import React, { useEffect, useRef, useState } from 'react'
import Avatar from 'boring-avatars'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
// import { Button } from '../Button'
import './AvatarWrapper.css'

type AvatarVariant = 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus'

interface AvatarWrapperProps {
  name: string
  colors: string[]
  variant: AvatarVariant
  square?: boolean
  size?: number
}

export const AvatarWrapper: React.FC<AvatarWrapperProps> = ({ name, colors, variant, square = false, size = 54 }) => {
  const [avatarName, setAvatarName] = useState(name)
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => event.target.select()
  const ref = useRef<HTMLDivElement>(null)
  const [copyValue, setCopyValue] = useState(name)

  useEffect(() => {
    if (ref.current) {
      const svgNode = ref.current.innerHTML
      const svgStart = svgNode.indexOf('<svg')
      const svgEnd = svgNode.indexOf('</svg>') + 6
      const svgResult = svgNode.substring(svgStart, svgEnd).toString()

      setCopyValue(svgResult)
    }
  }, [copyValue, variant, colors, avatarName, square, size])

  return (
    <div className="avatar-container">
      <div className="avatar-section" ref={ref}>
        <Avatar name={avatarName} colors={colors} size={size} variant={variant} square={square} />
      </div>
      <span className="avatar-name">{avatarName.split(' ')[0]}</span>
      {/* <input
        className="avatar-input"
        value={avatarName}
        onChange={(e) => setAvatarName(e.target.value)}
        onFocus={(e) => handleFocus(e)}
      /> */}
      {/* <div className="button-section">
        <CopyToClipboard text={copyValue}>
          <Button>Copy SVG</Button>
        </CopyToClipboard>
      </div> */}
    </div>
  )
}
