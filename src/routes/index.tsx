import { createBrowserRouter } from "react-router-dom";
import { PublicLay } from "../layout/PublicLay";
import { LandingPage } from "../pages/public/LandingPage";
import { HomePageAdmin } from "../pages/admin/HomePageAdmin";
import { HomePageModerator } from "../pages/moderator/HomePageModerator";
import { LoginPage } from "../pages/public/auth/LoginPage";
import { PageShield } from "../components/PageShield";
import { RegisterPage } from "../pages/public/auth/RegisterPage";
import { HomePage, homePageLoader } from "../pages/public/HomePage";
import { CreateQuestion, createQuestionLoader } from "../pages/public/question/CreateQuestion";
import { EditQuestion, editQuestionLoader } from "../pages/public/question/EditQuestion";
import { ShowQuestion, showQuestionLoader } from "../pages/public/question/ShowQuestion";
import { UserPage, userPageLoader } from "../pages/public/UserPage";

export const router = createBrowserRouter([
    {
        children: [
            {
                element: <PublicLay />,
                children: [
                    {
                        path: '/home',
                        element: <HomePage />,
                        loader: homePageLoader
                    },
                    {
                        path: '/profile/:userID',
                        element: <UserPage />,
                        loader: userPageLoader
                    }
                ]
            },
            {
                path: '/createQuestion',
                element: <CreateQuestion />,
                loader: createQuestionLoader
            },
            {
                path: '/showQuestion/:questionID',
                element: <ShowQuestion />,
                loader: showQuestionLoader
            },
            {
                path: '/editQuestion/:questionID',
                element: <EditQuestion />,
                loader: editQuestionLoader
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
        ],
        errorElement: <p>page not found</p>
    }
])