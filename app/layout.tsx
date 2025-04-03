import { Metadata } from 'next';
import Link from 'next/link';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/utils/helpers';
import { Footer } from '@/components/ui/Footer';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import 'styles/main.css';

const title =
  'Boring Avatars: Open-Source React Library & Customizable SVG Avatar Service';
const description =
  'Discover our open-source React library and subscription-based service for generating unique SVG user profile avatars for your website.';

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: '/images/boring-avatars.jpg',
        width: 1200,
        height: 630,
        alt: 'Boring Avatars'
      }
    ]
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-QRQBNK7BFL" />
        <main
          id="skip"
          className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
        >
          <nav>
            <ul>
              <li>
                <Link href="/">React</Link>
              </li>
              <li>
                <Link href="/api-service">API Service</Link>
              </li>
              <li>
                <Link href="/playground">Playground</Link>
              </li>
              <li>
                <Link href="/examples">Examples</Link>
              </li>
              {/* <li>
                <Link href="/pricing">Pricing</Link>
              </li> */}
            </ul>
          </nav>
          {children}
          <Footer
            colors={['#0a0310', '#49007e', '#ff005b', '#ff7d10', '#ffb238']}
          />
        </main>
      </body>
    </html>
  );
}
