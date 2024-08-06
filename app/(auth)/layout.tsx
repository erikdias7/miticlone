import Image from 'next/image'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/assets/images/portfolio/consulta.png"
            alt="Auth image"
            width={900}
            height={300}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  )
}
