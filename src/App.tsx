import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import SignInLayout from "./layouts/SignInLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import DashboardUser from "./pages/User/DashboardUser";
import NotFound from "./pages/NotFound";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import LoginPage from "./pages/SignIn/LoginPage";
import ReagisterPage from "./pages/SignIn/ReagisterPage";
const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<SignInLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="Register" element={<ReagisterPage />} />
                </Route>
                <Route path="Admin" element={<AdminLayout />}>
                    <Route index element={<DashboardAdmin />} />
                    <Route path="Actors" element={<h1>Actors</h1>} />
                    <Route path="Cinemas" element={<h1>Cinemas</h1>} />
                    <Route path="Movies" element={<h1>Movies</h1>} />
                    <Route path="Producers" element={<h1>Producers</h1>} />
                </Route>
                <Route path="User" element={<UserLayout />}>
                    <Route index element={<DashboardUser />} />
                    <Route path="Actors" element={<h1>Actors</h1>} />
                    <Route path="Movies" element={<h1>Movies</h1>} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
