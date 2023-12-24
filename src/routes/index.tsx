import { createBrowserRouter } from "react-router-dom";
import { PublicLay } from "../layout/PublicLay";
import { LandingPage } from "../pages/public/LandingPage";
import { HomePageAdmin } from "../pages/admin/HomePageAdmin";
import { HomePageModerator } from "../pages/moderator/HomePageModerator";
import { LoginPage } from "../pages/public/auth/LoginPage";
import { PageShield } from "../components/PageShield";
import { RegisterPage } from "../pages/public/auth/RegisterPage";
import { HomePage } from "../pages/public/HomePage";

export const router = createBrowserRouter([
    {
        element: <PublicLay />,
        children: [
            {
                path: '/home',
                element: <HomePage />
            }
        ]
    },
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/admin',
        element: <PageShield children={<HomePageAdmin />} pageType="admin" />
    },
    {
        path: '/moderator',
        element: <PageShield children={<HomePageModerator />} pageType="moderator" />
    }
])