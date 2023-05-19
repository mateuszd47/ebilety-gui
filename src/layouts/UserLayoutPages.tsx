import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const UserLayoutPages = () => {
    return (
        <div className="user">
            <div className="user__container">
                <Header/>
                <Outlet />
            </div>
        </div>
    );
};

export default UserLayoutPages;
