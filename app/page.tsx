'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace('/index.html')
    }, 0)

    return () => clearTimeout(timeout)
  }, [])

  return <></>
}
