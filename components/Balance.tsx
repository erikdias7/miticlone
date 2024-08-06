import React from 'react'

interface BalanceProps {
  amount: string
}

const Balance: React.FC<BalanceProps> = ({ amount }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl">
        Saldo total: <span className="font-bold">R${amount}</span>
      </h2>
    </div>
  )
}

export default Balance
