'use client'

import React from 'react'
import {
  ExampleChat,
  ExampleProfile,
  ExampleSuggested,
  ExampleShared,
  ExampleUpload,
  ExampleInstagram,
  ExampleTwitter
} from '@/components/ui'
import { AvatarCodeSnippet } from '@/components/ui/CodeBlock/AvatarCodeSnippet'
import { AvatarWrapper } from '@/components/ui/AvatarWrapper/AvatarWrapper'
import { exampleNames } from '@/components/ui/example-names'
import './styles.css'

type AvatarVariant = 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus'

interface ExampleProps {
  title?: string
  imgProfile: string
  imgUpload: string
  variant: AvatarVariant
  colors: string[]
  nameProfile: string
  nameInstagram: string
  nameUpload: string
  nameUploadLikes: string[]
  dataList: Array<{
    name: string
    email: string
    time: string
    status?: boolean
  }>
  dataTwitter: Array<{
    name: string
    handle: string
    tweet: string
    time: string
  }>
  dataSuggested: Array<{
    name: string
  }>
  dataShared: Array<{
    name: string
    role: string
  }>
  square?: boolean
}

const Example: React.FC<ExampleProps> = ({
  title,
  imgProfile,
  imgUpload,
  variant,
  colors,
  nameProfile,
  nameInstagram,
  nameUpload,
  nameUploadLikes,
  dataList,
  dataTwitter,
  dataSuggested,
  dataShared,
  square = false
}) => {
  const style = {
    '--color-1': colors[0] + '40',
    '--color-2': colors[1] + '10'
  } as React.CSSProperties

  return (
    <section className="example-section">
      <div className="example-wrapper" style={style}>
        {title && <h2 className="example-code-title">{title}</h2>}
        <div className="card example-code-card">
          <div className="avatars-grid">
            {exampleNames.slice(0, 10).map((exampleName, name) => (
              <AvatarWrapper key={name} name={exampleName} colors={colors} variant={variant} square={square} />
            ))}
          </div>
          <div className="example-code-content">
            <AvatarCodeSnippet colors={colors} variant={variant} square={square} />
          </div>
        </div>
        <div className="example-grid">
          <ExampleUpload
            name={nameUpload}
            colors={colors}
            variant={variant}
            likes={nameUploadLikes}
            img={imgUpload}
            square={square}
          />
          <ExampleTwitter users={dataTwitter} colors={colors} variant={variant} square={square} />
          <ExampleInstagram name={nameInstagram} colors={colors} variant={variant} img={imgProfile} square={square} />
          <ExampleProfile name={nameProfile} colors={colors} variant={variant} img={imgProfile} square={square} />
          <ExampleChat users={dataList} colors={colors} variant={variant} square={square} />
          <ExampleSuggested users={dataSuggested} colors={colors} variant={variant} square={square} />
          <ExampleShared users={dataShared} colors={colors} variant={variant} square={square} />
        </div>
      </div>
    </section>
  )
}

export default Example
