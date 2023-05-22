import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound ">
            <div className="notFound__container">
                <div className="container__component">
                    <p>Ops coś się stało!!!</p>
                </div>

                <div className="container__component">
                    <NavLink className="button" to={"/"}>Wróć do strony Głównej</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
