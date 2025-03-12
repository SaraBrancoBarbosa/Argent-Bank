import "./transaction.css"

function TransactionPage() {
  return (
    <div className="bg-dark container">

      <section className="account">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
      </section>
  
      <section className="transactions-container">

        <div className="titles-container">
          <p className="title">Date</p>
          <p className="title">Description</p>
          <p className="title">Amount</p>
          <p className="title">Balance</p>
        </div>

        {/* Ce sera un composant, TransactionCard : */}
        <div className="transaction">
          <i className="fa fa-solid fa-chevron-down transaction-icon"></i>
          <p className="text">June 20th, 2020</p>
          <p className="text">Golden Sun Bakery</p>
          <p className="text">$5.00</p>
          <p className="text">$2082.79</p>
        </div>
      </section>

    </div>
  )
}

export default TransactionPage
