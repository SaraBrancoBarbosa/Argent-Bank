import { useState } from "react"
import "./login.css"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/userSlice"
import { useNavigate } from "react-router"

/******
Avec le "Remember me" coché, stocker le token localStorage ?
Et quand il n'est pas coché, stocker le token dans sessionStorage ?
Ou stocker le token dans le store ?
******/
function LoginPage() {
  
  // Avec useState, on stocke les valeurs des champs username, password et rememberMe
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  // redux state
  const {loading, error} = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginEvent = (event) => {
    event.preventDefault()
    let userCredentials={
      username, password
    }
    dispatch(login(userCredentials)).then((result) => {
      // si login est fulfilled (userSlice) alors on aura quelque chose à payload
      // On va clear le formulaire et être redirigé vers la homepage
      if(result.payload) {
        setUsername("")
        setPassword("")
        navigate("/profile")
      }
    })
  }

  return (
    <div className="sign-in-container bg-dark">
      <section className="sign-in-content">

        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleLoginEvent}>

          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              // La valeur associée à l'état (du useState)
              value={username}
              //onChange pour mettre à jour cet état dès que l'utilisateur change quelque chose
              // event contient la valeur actuelle de l'élément
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          {/* Le bouton du fichier HTML de base, changer par un lien ? */}
          <button type="submit" className="button">
            {loading ? "Loading..." : "Sign in"}
          </button>

          {error && (
            <div className="alert" role="alert">{error}</div>
          )}
          
        </form>

      </section>
    </div>
  )
}

export default LoginPage
