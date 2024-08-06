import React from 'react'
import Dashboard from '@/components/Dashboard'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import SidebarRight from '@/components/SidebarRight'
import ImageDashboard from '@/components/ImageDashboard'

const Home: React.FC = async () => {
  const user = await getLoggedInUser()
  return (
    <div className="flex">
      <div className="flex-1">
        <Dashboard />
        <TotalBalanceBox user={user} />
        <ImageDashboard />
      </div>
      <div>
        <SidebarRight user={user} />
      </div>
    </div>
  )
}

export default Home
