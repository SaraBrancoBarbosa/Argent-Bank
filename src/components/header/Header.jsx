import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../redux/profileSlice"
import { logOut } from "../../redux/tokenSlice"
import "./header.css"

function Header() {
    
    const dispatch = useDispatch()

    // The state to know if the user is connected or not
    const { token } = useSelector(state => state.token)
    const { firstName } = useSelector(state => state.profile)

    const handleSignOut = (e) => {
        e.preventDefault()
        // To reinitialise the Redux token
        dispatch(logOut())
        window.location.href="/"
    }

    useEffect(() => {
        if(token && firstName === null) {
            // Async function to load the userprofile information from the back-end data (by using redux)
            dispatch(getProfile(token))
        }
    },[token, firstName, dispatch])

    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <img
                    className="header-logo-image"
                    src="/assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {/* To display the correct header depending on the connexion state */}
            {token ? (
                <div className="sign-out">
                    <Link to="/profile" className="header-item">
                        <i className="fa fa-user-circle"></i>
                        <p className="header-item-text">{firstName}</p>
                    </Link>
                    <Link to="/" onClick={handleSignOut} className="header-item">
                        <i className="header-item-icon fa fa-sign-out"></i>
                        <p className="header-item-text">Sign Out</p>
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to="/login" className="header-item">
                        <i className="header-item-icon fa fa-user-circle"></i>
                        <p className="header-item-text">Sign In</p>
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header