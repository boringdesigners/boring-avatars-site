import React from 'react';
import { Example } from '@/components/ui-system';
import { exampleNames } from '@/components/ui/example-names';
import colors from 'nice-color-palettes/1000';
import './styles.css';

type AvatarVariant =
  | 'marble'
  | 'beam'
  | 'pixel'
  | 'sunset'
  | 'ring'
  | 'bauhaus';

interface ExampleData {
  title: string;
  colors: string[];
  variant: AvatarVariant;
  imgProfile: string;
  imgUpload: string;
}

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
];

const namesList = exampleNames.slice(10, 15);
const namesTwitter = exampleNames.slice(10, 14);
const namesSuggested = exampleNames.slice(20, 24);
const namesShared = exampleNames.slice(28, 36);
const nameProfile = exampleNames[6];
const nameInstagram = exampleNames[14];
const nameUpload = exampleNames[8];
const nameUploadLikes = exampleNames.slice(30, 35);
const nameSample = exampleNames.slice(0, 10);

const dataList = namesList.map((name: string) => ({
  name: name,
  email: `@${name.toLowerCase().split(' ')[0]}`,
  status: Math.random() > 0.5 ? true : false,
  time: `${Math.floor(Math.random() * 50)} min`
}));

const dataTwitter = namesTwitter.map((name: string) => ({
  name: name,
  handle: `@${name.toLowerCase().split(' ')[0]}`,
  tweet: commentsTwitter[Math.floor(Math.random() * commentsTwitter.length)],
  time: `${Math.floor(Math.random() * 50)}m`
}));

const dataSuggested = namesSuggested.map((name: string) => ({
  name: `${name.split(' ')[0]}`
}));

const dataShared = namesShared.map((name: string) => ({
  name: `${name.split(' ')[0]}`,
  role: `@${name.split(' ')[0]}${Math.floor(Math.random() * 10)}`
}));

const examples: ExampleData[] = [
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
];

export default function ExamplesPage() {
  return (
    <main className="examples-container">
      <h1>Fun ways to use boring avatars</h1>
      <p>
        Discover the possibilities of custom avatars with our open-source
        library. From social apps to games and SaaS platforms, it's easy to add
        a personal touch to any project.
      </p>

      {examples.map((example, index) => (
        <Example
          key={index}
          {...example}
          nameProfile={nameProfile}
          nameInstagram={nameInstagram}
          nameUpload={nameUpload}
          nameUploadLikes={nameUploadLikes}
          dataList={dataList}
          dataTwitter={dataTwitter}
          dataSuggested={dataSuggested}
          dataShared={dataShared}
          nameSample={nameSample}
        />
      ))}
    </main>
  );
}
