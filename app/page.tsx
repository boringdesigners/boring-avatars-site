'use client'

import Image from 'next/image'
import { Suspense } from 'react'
import { Button } from '@/components/ui'
import { GitHubStars } from '@/components/ui/components/github-stars'
import { Github, ArrowRight } from '@/components/ui/icons'
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

        <div className="card sponsorCard">
          <a
            className="sponsorCard-logo"
            href="https://www.testmuai.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TestMu AI"
          >
            <Image src="/images/testmu-logo.png" alt="" width={24} height={24} />
          </a>
          {/* <p className="sponsorCard-label">Sponsored</p> */}
          <p className="sponsorCard-lead">
            Boring-avatars is generously sponsored by TestMu AI
          </p>
          <p className="sponsorCard-body">
            TestMu AI (formerly LambdaTest) is the world&apos;s first full-stack agentic AI quality engineering
            platform. Autonomous AI agents plan, author, execute, analyze, and optimize tests with humans in the loop,
            across 3,000+ browser/OS combinations and 10,000+ real devices. Trusted by 18,000+ enterprises including
            Microsoft, OpenAI, NVIDIA, and Vimeo.
          </p>
          <a
            className="sponsorCard-link"
            href="https://www.testmuai.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the platform
            <ArrowRight />
          </a>
        </div>
      </div>
    </aside>
    <div className="homePlayground">
      <Playground />
    </div>
  </div>
)

export default App
