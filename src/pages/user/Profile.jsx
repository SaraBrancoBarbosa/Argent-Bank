import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { editProfile } from "../../redux/profileSlice"
import AccountCard from "../../components/account-card/AccountCard"
import "./profile.css"

function ProfilePage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // The authentification token and profile data from the Redux store
  const { token } = useSelector((state) => state.token)
  const { firstName, lastName } = useSelector((state) => state.profile)

  const [editUser, setEditUser] = useState({firstName, lastName})
  const [isEditing, setEditing] = useState(false)
  
  // To save the names modifications
  const handleSave = () => {
     // To stop the edition mode
    setEditing(false)

    // To send our Redux action with the updated data and the token
    dispatch(editProfile({
      ...editUser,
      token
    }))
  }

  // To cancel the modifications
  const handleCancel = () => {
    setEditing(false)
  }

  // To always get the updated names
  useEffect(() => {
    setEditUser({
      firstName, lastName
    })
  },[firstName, lastName])

  // If the user isn't authentified, then => login page
  useEffect( () => {
    if(!token) {
      navigate("/login")
    }
  }, [token, navigate])
  
  if(!token) return <></>
  
  return (
    <div className="user-container bg-dark">

      <div className="user-name">
        <h1>
          Welcome back<br />

          {/* To display the inputs when editing */}
          {isEditing ? (
            <div className="input-div">
              <input
                type="text"
                // Current value of firstname (from the Redux store). If firstName is null/undefined => empty string
                value={editUser.firstName ?? ""}
                // Everytime a user change the input, the local state "editUser" is updated with the new value
                onChange={(e) => setEditUser(prevState => ({ ...prevState, firstName: e.target.value }))}
              />
              <input
                type="text"
                value={editUser.lastName ?? ""}
                onChange={(e) => setEditUser(prevState => ({ ...prevState, lastName: e.target.value }))}
              />
            </div>
          ) : (
            <>
              {/* To simply display the names (default state) */}
              {firstName} {lastName}
            </>
          )}
        </h1>

        {/* To display the buttons acording to the editing state */}
        {isEditing ? (
          <div className="buttons-container">
            <button type="button" className="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button type="button" className="button" onClick={() => setEditing(true)}>
            Edit name
          </button>
        )
      }

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