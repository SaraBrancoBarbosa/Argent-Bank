import { Link } from "react-router-dom"
import "./header.css"

const logo = "assets/img/argentBankLogo.png"

function Header() {
    
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
            <div>
                <Link to="/sign-in" className="header-item">
                    <i className="header-item-icon fa fa-user-circle"></i>
                    <p className="header-item-text">Sign In</p>
                </Link>
            </div>

            {/* Quand on est connecté en tant qu'utilisateur :
            <div>
                <Link to="/user" className="header-item">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </Link>
                <Link to="/" className="header-item">
                    <i className="header-item-icon fa fa-sign-out"></i>
                    <p className="header-item-text">Sign Out</p>
                </Link>
            </div> */}
        </header>
    )
}

export default Header