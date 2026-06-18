import { FC } from 'react'

interface ExampleUploadProps {
  name: string
  likes: string[]
  colors: string[]
  variant: string
  img: string
  square?: boolean
}

declare const ExampleUpload: FC<ExampleUploadProps>
export default ExampleUpload
