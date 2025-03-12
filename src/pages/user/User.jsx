import { Link } from "react-router"
import "./user.css"

function UserPage() {
  return (
    <div className="user-container bg-dark">

      <div className="user-name">
        <h1>
          Welcome back<br />
          {/* Prénom et nom fetchés plus tard : */}
          Tony Jarvis!
        </h1>
        <div className="buttons-container">
          <button className="button">Save</button>
          <button className="button">Cancel</button>
        </div>
      </div>

      <h2 className="sr-only">Accounts</h2>

      <div className="accounts-container">
        
        {/* Mettre le composant Card une fois les données fetchées */}

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            {/* Exemple de bouton pour aller à la page "transaction" */}
            <Link to="transaction" className="header-logo">
              <button className="button">View transactions</button>
            </Link>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="button">View transactions</button>
          </div>
        </section>
      </div>

    </div>
  )
}

export default UserPage


