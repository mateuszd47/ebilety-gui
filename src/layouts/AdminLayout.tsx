import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="layout">
            <Outlet />
        </div>
    );
};

export default AdminLayout;
