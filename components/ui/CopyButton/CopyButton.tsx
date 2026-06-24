'use client'

import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Check, Copy } from 'lucide-react'
import { Button } from '../Button'
import './CopyButton.css'

interface CopyButtonProps {
  text: string
  label?: string
  className?: string
}

export const CopyButton = ({ text, label = 'Copy', className = '' }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false)
  const [tooltip, setTooltip] = useState<{ left: number; top: number } | null>(null)
  const ref = useRef<HTMLSpanElement>(null)

  const showTooltip = () => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) setTooltip({ left: rect.left + rect.width / 2, top: rect.top })
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const tooltipLabel = copied ? 'Copied' : label

  return (
    <span
      className="copy-button"
      data-copied={copied}
      ref={ref}
      onMouseEnter={showTooltip}
      onMouseLeave={() => setTooltip(null)}
      onFocus={showTooltip}
      onBlur={() => setTooltip(null)}
    >
      <Button
        className={`copy-button-trigger ${className}`}
        onClick={handleCopy}
        aria-label={tooltipLabel}
        icon={
          <span className="copy-button-icons">
            <Check className="copy-button-icon copy-button-icon--check" size={16} aria-hidden="true" />
            <Copy className="copy-button-icon copy-button-icon--copy" size={16} aria-hidden="true" />
          </span>
        }
      />
      {tooltip &&
        createPortal(
          <span className="copy-tooltip" role="tooltip" style={{ left: tooltip.left, top: tooltip.top }}>
            {tooltipLabel}
          </span>,
          document.body
        )}
    </span>
  )
}
