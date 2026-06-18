'use client'

import React from 'react'
import { useState } from 'react'
import cn from 'classnames'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui'
import Input from '@/components/ui/Input'
import { getStripe } from '@/utils/stripe/client'
import { checkoutWithStripe } from '@/utils/stripe/server'
import { getErrorRedirect } from '@/utils/helpers'
import type { Product, Price, BillingInterval } from '@/utils/types'
import './Pricing.css'

export default function Pricing({ products }: { products: Product[] }) {
  const intervals = Array.from(new Set(products.flatMap((product) => product?.prices?.map((price) => price?.interval))))
  const router = useRouter()
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('month')
  const [priceIdLoading, setPriceIdLoading] = useState<string>()
  const [email, setEmail] = useState<string>('')
  const [domain, setDomain] = useState<string>('')
  const [testDomain, setTestDomain] = useState<string>('')

  const currentPath = usePathname()

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id)

    const { errorRedirect, sessionId } = await checkoutWithStripe({
      price,
      redirectPath: `/success`,
      email,
      domain,
      testDomain
    })

    if (errorRedirect) {
      setPriceIdLoading(undefined)
      return router.push(errorRedirect)
    }

    if (!sessionId) {
      setPriceIdLoading(undefined)
      return router.push(
        getErrorRedirect(
          currentPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      )
    }

    const stripe = await getStripe()
    stripe?.redirectToCheckout({ sessionId })

    setPriceIdLoading(undefined)
  }

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="gradient-text text-4xl font-extrabold sm:text-center sm:text-6xl">Pricing Plans</h1>
          <p className="m-auto mt-5 max-w-2xl text-xl sm:text-center sm:text-2xl">
            Boring Avatars scales to fit your needs. Choose a plan below or contact us for a custom solution if you
            require more. Our service grows with you, no matter how large your project becomes.
          </p>
          <div className="flex flex-col gap-6 lg:flex-row">
            <form className="mx-auto mt-8 w-full max-w-md space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 shadow-sm placeholder:text-zinc-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mail@example.com"
                />
              </div>
              <div>
                <label htmlFor="domain" className="block text-sm font-medium">
                  Your domain
                </label>
                <input
                  type="text"
                  id="domain"
                  className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 shadow-sm placeholder:text-zinc-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="https://yourdomain.com"
                />
              </div>
              <div>
                <label htmlFor="testDomain" className="block text-sm font-medium">
                  Your local testing domain
                </label>
                <input
                  type="text"
                  id="testDomain"
                  className="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 shadow-sm placeholder:text-zinc-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={testDomain}
                  onChange={(e) => setTestDomain(e.target.value)}
                  placeholder="https://"
                />
              </div>
            </form>
            <div className="flex flex-col items-center">
              <div className="mt-6 flex inline-flex w-2/3 self-center rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 sm:mt-8 md:w-auto lg:w-auto">
                {intervals.includes('month') && (
                  <button
                    onClick={() => setBillingInterval('month')}
                    type="button"
                    className={`${
                      billingInterval === 'month'
                        ? 'relative border-zinc-800 bg-zinc-700 text-white shadow-sm'
                        : 'relative ml-0.5 border border-transparent text-zinc-400'
                    } m-1 w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 sm:w-auto sm:px-8`}
                  >
                    Monthly billing
                  </button>
                )}
                {intervals.includes('year') && (
                  <button
                    onClick={() => setBillingInterval('year')}
                    type="button"
                    className={`${
                      billingInterval === 'year'
                        ? 'relative w-1/2 border-zinc-800 bg-zinc-700 text-white shadow-sm'
                        : 'relative ml-0.5 w-1/2 border border-transparent text-zinc-400'
                    } m-1 whitespace-nowrap rounded-md py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 sm:w-auto sm:px-8`}
                  >
                    Yearly billing
                  </button>
                )}
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-6 space-y-0 sm:mt-16 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none">
                {products.map((product) => {
                  const price = product?.prices?.find((price) => price.interval === billingInterval)
                  if (!price) return null
                  const priceString = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: price.currency!,
                    minimumFractionDigits: 0
                  }).format((price?.unit_amount || 0) / 100)
                  return (
                    <div
                      key={product.id}
                      className="flex flex-col divide-y divide-zinc-600 rounded-lg bg-zinc-900 shadow-sm"
                    >
                      <div className="flex flex-grow flex-col p-6">
                        <h2 className="text-2xl font-semibold leading-6 text-white">{product.name}</h2>
                        <p className="mt-4 text-zinc-100">{product.description}</p>
                        <p className="mt-8">
                          <span className="text-5xl font-extrabold text-zinc-100">{priceString}</span>
                          <span className="text-base font-medium text-zinc-100">/{billingInterval}</span>
                        </p>
                        <Button
                          variant="slim"
                          type="button"
                          loading={priceIdLoading === price.id}
                          onClick={() => handleStripeCheckout(price)}
                          className="gradient-button mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-white hover:bg-zinc-900"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

        .gradient-text {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(45deg, #ff00cc, #3333ff, #00ff99);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: gradient 10s ease infinite;
          background-size: 300% 300%;
          padding: 0.1em 0;
          line-height: 1.2;
        }

        .gradient-button {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(45deg, #ff00cc, #3333ff, #00ff99);
          background-size: 300% 300%;
          animation: gradient 10s ease infinite;
          border: none;
          color: white;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .gradient-button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}
