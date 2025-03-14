import "./profile.css"
import AccountCard from "../../components/account-card/AccountCard"

function ProfilePage() {
  return (
    <div className="user-container bg-dark">

      <div className="user-name">
        <h1>
          Welcome back<br />
          {/* Prénom et nom fetchés plus tard : */}
          Tony Jarvis!
        </h1>

        <button className="button">Edit name</button>

        {/* Les boutons à faire apparaître avec l'édition :
        <div className="buttons-container">
          <button className="button">Save</button>
          <button className="button">Cancel</button>
        </div> */}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <div className="accounts-container">

        <AccountCard
          title="Argent Bank Checking (x8349)"
          amount="2,082.79"
          description="Available Balance"
        />

        <AccountCard
          title="Argent Bank Savings (x6712)"
          amount="10,928.42"
          description="Available Balance"
        />

        <AccountCard
          title="Argent Bank Credit Card (x8349)"
          amount="184.30"
          description="Current Balance"
        />
        
      </div>

    </div>
  )
}

export default ProfilePage


