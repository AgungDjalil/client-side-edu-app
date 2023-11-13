import { createBrowserRouter } from "react-router-dom";
import { NavLay } from "../layout/NavLay";
import { HomePage } from "../pages/public/HomePage";
import { HomePageAdmin } from "../pages/admin/HomePageAdmin";
import { HomePageModerator } from "../pages/moderator/HomePageModerator";
import { LoginPage } from "../pages/public/auth/LoginPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <NavLay />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPage />
            }
        ]
    },
    {
        path: '/admin',
        element: <HomePageAdmin />
    },
    {
        path: '/moderator',
        element: <HomePageModerator />
    }
])