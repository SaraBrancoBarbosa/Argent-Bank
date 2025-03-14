import { Link } from "react-router-dom"
import "./header.css"
import { useState } from "react"

const logo = "/assets/img/argentBankLogo.png"

function Header() {
    
    // L'état pour savoir si le user est connecté ou non.
    // J'aimerais remplacer ça par un "vrai" état plus tard, avec un hook
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const handleSignOut = (e) => {
        e.preventDefault()
        window.localStorage.clear()
        window.location.href="/login"
        setIsLoggedIn(false)
    }

    const renderHeader = () => {
        // Quand on est connecté en tant qu'utilisateur :
        if (isLoggedIn === true) {
            return (
                <div className="sign-out">
                    <Link to="/profile" className="header-item">
                        <i className="fa fa-user-circle"></i>
                        <p className="header-item-text">Tony</p>
                    </Link>
                    <Link to="/" onClick={handleSignOut} className="header-item">
                        <i className="header-item-icon fa fa-sign-out"></i>
                        <p className="header-item-text">Sign Out</p>
                    </Link>
                </div>
            )
        }

        // Quand on n'est pas connecté :
        return (
            <div>
                <Link to="/login" className="header-item">
                    <i className="header-item-icon fa fa-user-circle"></i>
                    <p className="header-item-text">Sign In</p>
                </Link>
            </div>
        )
    }

    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <img
                    className="header-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {/* On affiche ici le bon header (partie droite) en fonction de l'état de connexion */}
            {renderHeader()}
        </header>
    )
}

export default Header