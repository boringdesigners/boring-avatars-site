'use client';

import { Suspense } from 'react';
import Avatar from 'boring-avatars';
import { Button, CodeBlock } from '@/components/ui';
import { GitHubStars } from '@/components/ui/components/github-stars';
import { Github } from '@/components/ui/icons';
import { exampleNames } from '@/components/ui/example-names';
import 'styles/main.css';

const colors = ['#0a0310', '#49007e', '#ff005b', '#ff7d10', '#ffb238'];
const size = 50;
const variants = [
  'marble',
  'beam',
  'pixel',
  'sunset',
  'bauhaus',
  'ring'
] as const;

const names = exampleNames.slice(10, 23);

const App = () => (
  <main className="readmeWrapper">
    <div className="readmeMain">
      <div className="readmeAvatarWrapper">
        {names.map((name) => (
          <Avatar
            key={name}
            name={name}
            size={size}
            variant={
              variants[Math.floor(Math.random() * variants.length)] ?? 'marble'
            }
            colors={colors}
          />
        ))}
      </div>
      <h1>Generate unique SVG avatars</h1>
      <p>
        Boring avatars is an open source React library that generates unique
        SVG-based user profile avatars from usernames, emails + or any random
        strings.
      </p>
      <p>
        Boring avatars offers implementation through simple component
        properties, customizable color palette options to match your brand
        identity and and six unique themes to choose.
      </p>
      <p>
        Perfect for developers seeking a modern, scalable solution to enhance
        user profiles without the complexity of managing image uploads or
        dealing with generic placeholder icons.
      </p>
      <div className="readmeMainCTA">
        <Button
          as="a"
          href="https://github.com/boringdesigners/boring-avatars"
          icon={<Github />}
        >
          GitHub
          <Suspense>
            <span className="readmeBadge">
              <GitHubStars user="boringdesigners" repo="boring-avatars" />
            </span>
          </Suspense>
        </Button>
      </div>
      <h2>Installation</h2>
      <CodeBlock code="npm install boring-avatars" />
      <h2>Usage</h2>
      <p>Import the component and use it in your React application:</p>
      <CodeBlock
        code={`import Avatar from "boring-avatars";

<Avatar name="Margaret Brent"/>`}
      />
      <h2>Props</h2>
      <h3>Name</h3>
      <p>
        The <code>name</code> prop is used to generate the avatar. It can be the
        username, email or any random string.
      </p>
      <CodeBlock code={`<Avatar name="Maria Mitchell"/>`} />
      <Avatar name="Maria Mitchell" size={size} colors={colors} />
      <h3>Variant</h3>
      <p>
        The <code>variant</code> prop is used to change the theme of the avatar.
        The available variants are: <code>marble</code>, <code>beam</code>,{' '}
        <code>pixel</code>, <code>sunset</code>, <code>ring</code> and{' '}
        <code>bauhaus</code>.
      </p>
      <CodeBlock code={`<Avatar name="Alice Paul" variant="beam"/>`} />
      <Avatar name="Alice Paul" size={size} variant="beam" colors={colors} />
      <h3>Size</h3>
      <p>
        The <code>size</code> prop is used to change the size of the avatar.
      </p>
      <CodeBlock code={`<Avatar name="Mary Edwards" size={80}/>`} />
      <Avatar name="Mary Edwards" size={80} colors={colors} />
      <h3>Colors</h3>
      <p>
        The <code>colors</code> prop is used to change the color palette of the
        avatar.
      </p>
      <CodeBlock
        code={`<Avatar name="Margaret Brent" colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}/>`}
      />
      <Avatar
        name="Margaret Brent"
        size={size}
        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      />
      <h3>Square</h3>
      <p>
        The <code>square</code> prop is used to change the shape of the avatar.
      </p>
      <CodeBlock code={`<Avatar name="Margaret Brent" square/>`} />
      <Avatar name="Margaret Brent" size={size} square colors={colors} />
    </div>
  </main>
);

export default App;
