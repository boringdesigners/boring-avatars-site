'use client'

import { useEffect, useState, Suspense } from 'react'
import Confetti from 'react-confetti'
import { CheckCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui'
import 'styles/main.css'

export default function PaymentSuccessWrapped() {
  return (
    <Suspense fallback={<div />}>
      <PaymentSuccess />
    </Suspense>
  )
}

function PaymentSuccess() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const domain = searchParams.get('domain')
  const testDomain = searchParams.get('testDomain')

  const [showConfetti, setShowConfetti] = useState(true)
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Set initial dimensions
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="from-primary/20 to-background flex min-h-screen flex-col items-center justify-center bg-gradient-to-b p-4">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <div className="bg-card text-card-foreground w-full max-w-md space-y-6 rounded-lg p-8 shadow-lg">
        <div className="flex items-center justify-center">
          <CheckCircle className="text-primary h-16 w-16" />
        </div>
        <h1 className="text-center text-3xl font-bold">Payment Successful!</h1>
        <p className="text-muted-foreground text-center">Thank you for subscribing to Boring Avatars Service.</p>
        <div className="space-y-2">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Domain:</strong> {domain}
          </p>
          <p>
            <strong>Test Domain:</strong> {testDomain}
          </p>
        </div>
        <div className="bg-muted rounded-md p-4 text-sm">
          <p>Within the next 24 hours, we will:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Allowlist your provided domains into our service.</li>
            <li>Send you a confirmation email with examples.</li>
          </ul>
        </div>
        <div className="text-center">
          <Link href="/">
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
