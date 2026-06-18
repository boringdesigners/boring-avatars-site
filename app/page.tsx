'use client'

import { Suspense } from 'react'
import { Button } from '@/components/ui'
import { GitHubStars } from '@/components/ui/components/github-stars'
import { Github } from '@/components/ui/icons'
import { Playground } from '@/components/Playground'
import 'styles/main.css'

const App = () => (
  <div className="homeLayout">
    <aside className="homeSidebar">
      <div className="readmeMain">
        <h1>Generate unique SVG avatars</h1>
        <p>
          Boring avatars is an open source React library and a subscription-based service that generates unique
          SVG-based user profile avatars from usernames, emails or any random strings.
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
      </div>
    </aside>
    <div className="homePlayground">
      <Playground />
    </div>
  </div>
)

export default App
