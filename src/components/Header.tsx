import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="container__logo">
                    <figure className="logo__img">
                        <h2>eBilety</h2>
                    </figure>
                </div>
                <nav className="container__nav">
                    <NavLink className="nav__navLink" to={"/"}>
                        Strona główna
                    </NavLink>
                    <NavLink className="nav__navLink" to={"/Movies"}>
                        Filmy
                    </NavLink>
                    <NavLink className="nav__navLink" to={"/Actors"}>
                        Aktorzy
                    </NavLink>
                </nav>
            </div>
            <div className="header__container">
                <div className="container__account">
                    <span className="account__cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    <span className="account__profile">profile</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
