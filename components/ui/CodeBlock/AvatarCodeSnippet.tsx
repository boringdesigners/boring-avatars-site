'use client'

import { Fragment } from 'react'
import { SlotText } from 'slot-text/react'
import { CopyButton } from '../CopyButton/CopyButton'
import 'slot-text/style.css'
import './CodeBlock.css'

type AvatarVariant = 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus'

interface AvatarCodeSnippetProps {
  colors: string[]
  variant: AvatarVariant
  square?: boolean
}

export const AvatarCodeSnippet = ({ colors, variant, square = false }: AvatarCodeSnippetProps) => {
  const code = `<Avatar colors={${JSON.stringify(colors)}} variant="${variant}"${square ? ' square' : ''} />`

  return (
    <pre className="code-block">
      <code>
        <span className="code-block-content">
          <span className="token punctuation">{'<'}</span>
          <span className="token tag">Avatar</span>{' '}
          <span className="token attr-name">colors</span>
          <span className="token punctuation">{'={['}</span>
          {colors.map((color, i) => (
            <Fragment key={i}>
              <span className="token string">
                {'"'}
                <SlotText text={color} options={{ direction: 'up', skipUnchanged: false, color, colorFade: 500 }} />
                {'"'}
              </span>
              {i < colors.length - 1 && <span className="token punctuation">, </span>}
            </Fragment>
          ))}
          <span className="token punctuation">{']}'}</span>{' '}
          <span className="token attr-name">variant</span>
          <span className="token punctuation">=</span>
          <span className="token string">
            {'"'}
            {variant}
            {'"'}
          </span>
          {square && (
            <>
              {' '}
              <span className="token attr-name">square</span>
            </>
          )}{' '}
          <span className="token punctuation">{'/>'}</span>
        </span>
        <span className="code-block-toolbar">
          <CopyButton text={code} label="Copy code" className="code-block-copy" />
        </span>
      </code>
    </pre>
  )
}
