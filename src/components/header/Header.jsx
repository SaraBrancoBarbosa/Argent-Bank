import { Link } from "react-router-dom"
import "./header.css"

const logo = "assets/img/argentBankLogo.png"

function Header() {
    
    return (
        <header className="header">
            <Link className="header-logo" href="./index.html">
                <img
                    className="header-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="header-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>

            {/* Quand on est connecté en tant qu'utilisateur :
            <div>
                <a class="main-nav-item" href="./user.html">
                    <i class="fa fa-user-circle"></i>
                    Tony
                </a>
                <a class="main-nav-item" href="./index.html">
                    <i class="fa fa-sign-out"></i>
                    Sign Out
                </a>
            </div> */}
        </header>
    )
}

export default Header