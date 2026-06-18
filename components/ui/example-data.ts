import { exampleNames } from '@/components/ui/example-names'

const commentsTwitter = [
  'Hilarious!',
  'Miau miau 🐱',
  "I can't stop laughing",
  "I'm dying 😂",
  'This is too good',
  "I'm crying",
  "I can't even",
  'This is too much',
  "I'm in tears",
  "I can't breathe",
  'Cat content 🐱',
  'Cats are the best'
]

const namesList = exampleNames.slice(10, 15)
const namesTwitter = exampleNames.slice(10, 14)
const namesSuggested = exampleNames.slice(20, 24)
const namesShared = exampleNames.slice(28, 36)

export const nameProfile = exampleNames[6]
export const nameInstagram = exampleNames[14]
export const nameUpload = exampleNames[8]
export const nameUploadLikes = exampleNames.slice(30, 35)
export const nameSample = exampleNames.slice(0, 10)

export const dataList = namesList.map((name: string, index) => ({
  name: name,
  email: `@${name.toLowerCase().split(' ')[0]}`,
  status: index % 2 === 0,
  time: `${(index * 7 + 3) % 50} min`
}))

export const dataTwitter = namesTwitter.map((name: string, index) => ({
  name: name,
  handle: `@${name.toLowerCase().split(' ')[0]}`,
  tweet: commentsTwitter[index % commentsTwitter.length],
  time: `${(index * 11 + 5) % 50}m`
}))

export const dataSuggested = namesSuggested.map((name: string) => ({
  name: `${name.split(' ')[0]}`
}))

export const dataShared = namesShared.map((name: string, index) => ({
  name: `${name.split(' ')[0]}`,
  role: `@${name.split(' ')[0]}${index % 10}`
}))

type AvatarVariant = 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus'

export interface ExampleData {
  title: string
  colors: string[]
  variant: AvatarVariant
  imgProfile: string
  imgUpload: string
}

export const examples: ExampleData[] = [
  {
    title: 'Marble pop',
    colors: ['#5b1d99', '#0074b4', '#00b34c', '#ffd41f', '#fc6e3d'],
    variant: 'marble',
    imgProfile: '/images/josep-martins-brushed-background.jpg',
    imgUpload: '/images/josep-martins-brushed-background.jpg'
  },
  {
    title: 'Beam duotone',
    colors: ['#ff0000', '#0000ff'],
    variant: 'beam',
    imgProfile: '/images/josep-martins-graffiti2-background.jpg',
    imgUpload: '/images/josep-martins-graffiti2-background.jpg'
  },
  {
    title: 'Pixel punk',
    colors: ['#0a0310', '#49007e', '#ff005b', '#ff7d10', '#ffb238'],
    variant: 'pixel',
    imgProfile: '/images/josep-martins-texture-background.jpg',
    imgUpload: '/images/josep-martins-texture-background.jpg'
  },
  {
    title: 'Bauhaus moholy',
    colors: ['#ffe3b3', '#ff9a52', '#ff5252', '#c91e5a', '#3d2922'],
    variant: 'bauhaus',
    imgProfile: '/images/josep-martins-graffiti-background.jpg',
    imgUpload: '/images/josep-martins-graffiti-background.jpg'
  },
  {
    title: 'Pixel duotone',
    colors: ['#222222', '#ffe4c4'],
    variant: 'pixel',
    imgProfile: '/images/josep-martins-dirty-window-background.jpg',
    imgUpload: '/images/josep-martins-dirty-window-background.jpg'
  }
]

export const playgroundExampleImages = {
  imgProfile: '/images/josep-martins-brushed-background.jpg',
  imgUpload: '/images/josep-martins-brushed-background.jpg'
}
