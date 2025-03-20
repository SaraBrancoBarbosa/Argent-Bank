import AccountCard from "../../components/account-card/AccountCard"
import { useDispatch, useSelector } from "react-redux"
import { cancelEdit, setEditing, setUserData } from "../../redux/profileSlice"
import "./profile.css"

function ProfilePage() {

  const { firstName, lastName, isEditing } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  // Pour sauvegarder les changements (bouton "save")
  const handleSave = () => {
     // On sauvegarde et on quitte le mode d'édition
    dispatch(setEditing(false))
  }

  // Pour annuler les modifications (bouton "cancel")
  const handleCancel = () => {
    dispatch(cancelEdit())
  }

  return (
    <div className="user-container bg-dark">

      <div className="user-name">
        <h1>
          Welcome back<br />

          {/* On fait appararaître les inputs à modifier lorsqu'on édite */}
          {isEditing ? (
            <div className="input-div">
              <input
                type="text"
                value={firstName}
                onChange={(e) => dispatch(setUserData({ firstName: e.target.value, lastName }))} 
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => dispatch(setUserData({ firstName, lastName: e.target.value }))} 
              />
            </div>
          ) : (
            <>
              {/* Sinon on a simplement le prénom et le nom */}
              {firstName} {lastName}
            </>
          )}
        </h1>

        {/* Le bouton s'affiche uniquement lorsqu'on n'est pas en mode édition */}
        {!isEditing && (
          <button className="button" onClick={() => dispatch(setEditing(true))}>
            Edit name
          </button>
        )}

        {/* Lorsqu'on édite les prénom/nom, les deux boutons Save et Cancel apparaissent */}
        {isEditing && (
          <div className="buttons-container">
            <button className="button" onClick={handleSave}>
              Save
            </button>
            <button className="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}

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


