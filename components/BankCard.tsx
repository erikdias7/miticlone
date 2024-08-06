import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Copy from '@/components/Copy'

const BankCard = ({ name, email }: BankCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href={``} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{name}</h1>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">Seu Código:</h1>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              <span className="text-14">{email}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image
            src="/assets/images/bg/logo1.png"
            width={50}
            height={54}
            alt="pay"
          />
          <Image
            src="/assets/images/bg/papel.png"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>
      </Link>

      <Copy title={email} />
    </div>
  )
}

export default BankCard
