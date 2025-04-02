'use client';

import React from 'react';
import { Button } from '../Button';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="code-block">
      <Button
        className="code-block-copy"
        onClick={() => navigator.clipboard.writeText(code)}
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
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};
