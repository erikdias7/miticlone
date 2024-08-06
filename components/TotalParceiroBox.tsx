import Balance from './Balance'

const TotalParceiroBox = () => {
  return (
    <section className="total-balance">
      <div className="flex flex-col gap-6">
        <Balance amount="0,00" />
      </div>
    </section>
  )
}

export default TotalParceiroBox
