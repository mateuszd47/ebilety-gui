import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <div className="layout">
            <Outlet />
        </div>
    );
};

export default UserLayout;
