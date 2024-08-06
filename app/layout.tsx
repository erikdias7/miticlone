import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import './globals.css'

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
})

export const metadata: Metadata = {
  title: 'Miticard',
  description: 'Miticard is a modern banking platform for everyone.',
  icons: {
    icon: '/assets/images/logo/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
