'use client'

import { sidebarLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
  const pathname = usePathname()

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/assets/images/logo/logo.png"
            width={120}
            height={120}
            alt="Finwiz logo"
          />
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname?.startsWith(`${item.route}/`)

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}

export default SideBar
