'use client';

import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui';
import Input from '@/components/ui/Input';
import { getStripe } from '@/utils/stripe/client';
import { checkoutWithStripe } from '@/utils/stripe/server';
import { getErrorRedirect } from '@/utils/helpers';
import type { Product, Price, BillingInterval } from '@/utils/types';
import './Pricing.css';

export default function Pricing({ products }: { products: Product[] }) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const [email, setEmail] = useState<string>('');
  const [domain, setDomain] = useState<string>('');
  const [testDomain, setTestDomain] = useState<string>('');

  const currentPath = usePathname();

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    const { errorRedirect, sessionId } = await checkoutWithStripe({
      price,
      redirectPath: `/success`,
      email,
      domain,
      testDomain
    });

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  return (
    <section>
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-16 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold sm:text-center sm:text-6xl gradient-text">
            Pricing Plans
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl sm:text-center sm:text-2xl">
            Boring Avatars scales to fit your needs. Choose a plan below or
            contact us for a custom solution if you require more. Our service
            grows with you, no matter how large your project becomes.
          </p>
          <div className="flex flex-col lg:flex-row gap-6">
            <form className="w-full max-w-md mx-auto mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm text-zinc-100 placeholder:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                  className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm text-zinc-100 placeholder:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="https://yourdomain.com"
                />
              </div>
              <div>
                <label
                  htmlFor="testDomain"
                  className="block text-sm font-medium"
                >
                  Your local testing domain
                </label>
                <input
                  type="text"
                  id="testDomain"
                  className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm text-zinc-100 placeholder:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={testDomain}
                  onChange={(e) => setTestDomain(e.target.value)}
                  placeholder="https://"
                />
              </div>
            </form>
            <div className="flex items-center flex-col">
              <div className="inline-flex self-center w-2/3 md:w-auto lg:w-auto mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
                {intervals.includes('month') && (
                  <button
                    onClick={() => setBillingInterval('month')}
                    type="button"
                    className={`${
                      billingInterval === 'month'
                        ? 'relative bg-zinc-700 border-zinc-800 shadow-sm text-white'
                        : 'ml-0.5 relative  border border-transparent text-zinc-400'
                    } w-1/2 rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
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
                        ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                        : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
                    } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
                  >
                    Yearly billing
                  </button>
                )}
              </div>
              <div className="mt-12 space-y-0 sm:mt-16 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
                {products.map((product) => {
                  const price = product?.prices?.find(
                    (price) => price.interval === billingInterval
                  );
                  if (!price) return null;
                  const priceString = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: price.currency!,
                    minimumFractionDigits: 0
                  }).format((price?.unit_amount || 0) / 100);
                  return (
                    <div
                      key={product.id}
                      className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900"
                    >
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-2xl font-semibold leading-6 text-white">
                          {product.name}
                        </h2>
                        <p className="mt-4 text-zinc-100">
                          {product.description}
                        </p>
                        <p className="mt-8">
                          <span className="text-5xl font-extrabold text-zinc-100">
                            {priceString}
                          </span>
                          <span className="text-base font-medium text-zinc-100">
                            /{billingInterval}
                          </span>
                        </p>
                        <Button
                          variant="slim"
                          type="button"
                          loading={priceIdLoading === price.id}
                          onClick={() => handleStripeCheckout(price)}
                          className="gradient-button block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md hover:bg-zinc-900"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  );
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
  );
}
