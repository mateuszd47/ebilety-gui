import { NavLink } from "react-router-dom";

const HeaderAdmin = () => {
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
                    <NavLink className="nav__navLink" to={"/Cinemas"}>
                        Kina
                    </NavLink>
                    <NavLink className="nav__navLink" to={"/Producers"}>
                        Reżyserowie
                    </NavLink>
                    <NavLink className="nav__navLink" to={"/Orders"}>
                        Zamówienia
                    </NavLink>
                </nav>
            </div>
            <div className="header__container">
                <div className="container__account">
                    <span className="account__profile">profile</span>
                </div>
            </div>
        </header>
    );
};

export default HeaderAdmin;
