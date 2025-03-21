import AccountCard from "../../../components/account-card/AccountCard"
import TransactionDropdown from "../../../components/transaction-dropdown/TransactionDropdown"
import "./transaction.css"

/***** This page is not yet implemented *****/

function TransactionPage() {
  
  return (
    <div className="bg-dark container">

      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount="2,082.79"
        description="Available Balance"
      />
  
      <section className="transactions-container">

        <div className="titles-container">
          <p className="title">Date</p>
          <p className="title">Description</p>
          <p className="title">Amount</p>
          <p className="title">Balance</p>
        </div>

        <TransactionDropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="5.00"
          balance="2082.79"

          type="Electronic"
          categoryId={1}
          note=""
        />

        <TransactionDropdown
          date="June 20th, 2020"
          description="Golden Sun Bakery"
          amount="5.00"
          balance="2082.79"

          type="Electronic"
          categoryId={2}
          note=""
        />
        
      </section>

    </div>
  )
}

export default TransactionPage
