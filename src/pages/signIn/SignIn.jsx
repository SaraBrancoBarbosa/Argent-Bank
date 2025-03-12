import { useState } from "react"
import "./signIn.css"

function SignInPage() {
  
  // Avec useState, on stocke les valeurs des champs username, password et rememberMe
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  // On gère la soumission du formulaire avec le onSubmit
  // On évite que la page se recharge avec le e.preventDefault
  // Finir de remplir, avec l'API ?
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="sign-in-container bg-dark">
      <section className="sign-in-content">

        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>

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
            Sign In
          </button>
          
        </form>

      </section>
    </div>
  )
}

export default SignInPage
