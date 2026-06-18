'use client'

import React, { Suspense } from 'react'
import { Button, CodeBlock } from '@/components/ui'
import { GitHubStars } from '@/components/ui/components/github-stars'
import { Github } from '@/components/ui/icons'
import Avatar from 'boring-avatars'
import 'styles/main.css'

const colors = ['#0a0310', '#49007e', '#ff005b', '#ff7d10', '#ffb238']
const size = 50

export default function ReactPage() {
  return (
    <div className="homeLayout">
      <aside className="homeSidebar">
        <h1>React library</h1>
        <p>
          Install the React library and generate unique, deterministic SVG avatars directly in your application.
          Customize styles, colors, and sizes with a simple, developer-friendly API.{' '}
        </p>
        <div className="readmeMainCTA">
          <Button as="a" href="https://github.com/boringdesigners/boring-avatars" variant="primary" icon={<Github />}>
            GitHub
            <Suspense>
              <span className="readmeBadge">
                <GitHubStars user="boringdesigners" repo="boring-avatars" />
              </span>
            </Suspense>
          </Button>
        </div>
      </aside>
      <div className="homePlayground">
        <div className="readmeMain">
          <h2>Installation</h2>
          <CodeBlock language="react" code="npm install boring-avatars" />
          <h2>Usage</h2>
          <p>Import the component and use it in your React application:</p>
          <CodeBlock
            language="react"
            code={`import Avatar from "boring-avatars";

<Avatar name="Margaret Brent"/>`}
          />
          <h2>Props</h2>
          <h3>Name</h3>
          <p>
            The <code>name</code> prop is used to generate the avatar. It can be the username, email or any random
            string.
          </p>
          <CodeBlock language="react" code={`<Avatar name="Maria Mitchell"/>`} />
          <Avatar name="Maria Mitchell" size={size} colors={colors} />
          <h3>Variant</h3>
          <p>
            The <code>variant</code> prop is used to change the theme of the avatar. The available variants are:{' '}
            <code>marble</code>, <code>beam</code>, <code>pixel</code>, <code>sunset</code>, <code>ring</code> and{' '}
            <code>bauhaus</code>.
          </p>
          <CodeBlock language="react" code={`<Avatar name="Alice Paul" variant="beam"/>`} />
          <Avatar name="Alice Paul" size={size} variant="beam" colors={colors} />
          <h3>Size</h3>
          <p>
            The <code>size</code> prop is used to change the size of the avatar.
          </p>
          <CodeBlock language="react" code={`<Avatar name="Mary Edwards" size={80}/>`} />
          <Avatar name="Mary Edwards" size={80} colors={colors} />
          <h3>Colors</h3>
          <p>
            The <code>colors</code> prop is used to change the color palette of the avatar.
          </p>
          <CodeBlock
            language="react"
            code={`<Avatar name="Margaret Brent" colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}/>`}
          />
          <Avatar name="Margaret Brent" size={size} colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']} />
          <h3>Square</h3>
          <p>
            The <code>square</code> prop is used to change the shape of the avatar.
          </p>
          <CodeBlock language="react" code={`<Avatar name="Margaret Brent" square/>`} />
          <Avatar name="Margaret Brent" size={size} square colors={colors} />
        </div>
      </div>
    </div>
  )
}
