import Balance from './Balance'
import UserInfo from './UserInfo'

const TotalBalanceBox = ({ user }: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="flex flex-col gap-6">
        <Balance amount="0,00" />
        <div className="flex flex-col gap-2">
          <UserInfo
            name={`${user?.firstName || 'firstName'} ${user?.lastName || 'lastName'}`}
            code={`${user?.email || 'email'}`}
          />
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
