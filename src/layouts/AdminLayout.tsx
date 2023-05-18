import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
    return (
        <div className="app">
            <Outlet />
        </div>
    );
};

export default AdminLayout;
