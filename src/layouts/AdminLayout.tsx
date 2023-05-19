import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";

const AdminLayout = () => {
    return (
        <div className="layout__admin">
            <HeaderAdmin />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
