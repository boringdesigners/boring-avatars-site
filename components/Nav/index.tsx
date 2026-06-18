'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Avatar from 'boring-avatars'

const colors = ['#ffc55f', '#ff4845']

const navItems = [
  { href: '/react', label: 'React' },
  { href: '/api-service', label: 'API Service' },
  { href: '/gallery', label: 'Gallery' }
]

const isNavActive = (pathname: string, href: string) => {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className={isNavActive(pathname, '/') ? 'nav-link--selected' : undefined}>
            <Avatar name="BoringAvatars.com" size={28} variant="beam" colors={colors} />
          </Link>
        </li>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={isNavActive(pathname, item.href) ? 'nav-link--selected' : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
