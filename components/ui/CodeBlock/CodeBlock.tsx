'use client'

import React, { useMemo } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import { CopyButton } from '../CopyButton/CopyButton'
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
          <CopyButton text={code} label="Copy code" className="code-block-copy" />
        </span>
      </code>
    </pre>
  )
}
