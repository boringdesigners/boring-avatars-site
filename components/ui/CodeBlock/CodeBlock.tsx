'use client'

import React, { useMemo } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import { Button } from '../Button'
import './CodeBlock.css'

export type CodeBlockLanguage = 'react' | 'html'

interface CodeBlockProps {
  code: string
  language?: CodeBlockLanguage
}

const languageGrammars: Record<CodeBlockLanguage, Prism.Grammar> = {
  react: Prism.languages.jsx,
  html: Prism.languages.markup
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const highlightedCode = useMemo(() => {
    if (!language) {
      return null
    }

    return Prism.highlight(code, languageGrammars[language], language)
  }, [code, language])

  return (
    <pre className="code-block">
      <code>
        {highlightedCode ? (
          <span className="code-block-content" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        ) : (
          <span className="code-block-content">{code}</span>
        )}
        <span className="code-block-toolbar">
          <Button
            className="code-block-copy"
            onClick={() => navigator.clipboard.writeText(code)}
            aria-label="Copy code"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            }
          />
        </span>
      </code>
    </pre>
  )
}
