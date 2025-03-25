import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/tokenSlice"
import "./login.css"

function LoginPage() {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  // Redux state
  const {loading, error, token} = useSelector((state) => state.token)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // When submitting the form
  const handleLoginEvent = (event) => {
    event.preventDefault()
    const userCredentials={
      username, password, rememberMe
    }
    dispatch(login(userCredentials)).then((result) => {
      // tokenSlice: if login is fulfilled => payload
      if(result.payload) {
        setUsername("")
        setPassword("")
        navigate("/profile")
      }
    })
  }

  useEffect(() => {
    if(token) navigate("/profile")
  },[token, navigate])

  if(token) return <></>

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
              value={username}
              // onChange to update the local state
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

          <button type="submit" className="button">
            {loading ? "Loading..." : "Sign in"}
          </button>

          {error && (
            <div className="alert" role="alert">Username or password incorrect</div>
          )}
          
        </form>

      </section>
    </div>
  )
}

export default LoginPage
