import React from 'react'
import BankCard from './BankCard'

const SidebarRight = ({ user }: SidebarRightProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user?.firstName[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Níveis de indicação</h2>
          <h4>Indicação direta: 40%</h4>
          <h4>Primeiro nível: 5%</h4>
          <h4>Segundo nível: 2%</h4>
          <h4>Terceiro nível: 2%</h4>
          <h4>Quarto nível: 1%</h4>
          <h4>Quinto nível: 1%</h4>
        </div>
        <div className="relative z-10">
          <BankCard
            name={`${user?.firstName} ${user?.lastName}`}
            email={user?.email}
            date={'12 / 35'}
          />
        </div>
      </section>
    </aside>
  )
}

export default SidebarRight
