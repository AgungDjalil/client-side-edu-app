import { createBrowserRouter } from "react-router-dom";
import { PublicLay } from "../layout/PublicLay";
import { LandingPage } from "../pages/public/LandingPage";
import { HomePageModerator } from "../pages/moderator/HomePageModerator";
import { LoginPage } from "../pages/public/auth/LoginPage";
import { PageShield } from "../components/PageShield";
import { RegisterPage } from "../pages/public/auth/RegisterPage";
import { HomePage, homePageLoader } from "../pages/public/HomePage";
import { CreateQuestion, createQuestionLoader } from "../pages/public/question/CreateQuestion";
import { EditQuestion, editQuestionLoader } from "../pages/public/question/EditQuestion";
import { ShowQuestion, showQuestionLoader } from "../pages/public/question/ShowQuestion";
import { UserPage, userPageLoader } from "../pages/public/UserPage";
import { SideBarAdmin } from "../layout/SidebarAdmin";
import { UserPageAdmin } from "../pages/admin/user/UserPageAdmin";
import { QuestionPageAdmin } from "../pages/admin/question/QuestionPageAdmin";
import { AnswerPageAdmin } from "../pages/admin/answer/AnswerPageAdmin";
import { ReportPageAdmin } from "../pages/admin/report/ReportPageAdmin";
import { AnswerPage } from "../pages/public/answer/AnswerPage";
import { ShowAnswerAndQuestionPage } from "../pages/public/ShowAnswerAndQuestionPage";
import { BottomNavModerator } from "../layout/BottomNavModerator";

export const router = createBrowserRouter([
    {
        children: [
            {
                path: '/moderator',
                element: <PageShield children={<BottomNavModerator />} pageType="moderator" />,
                children: []
            },
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
                    },
                    {
                        path: '/answer/:questionID',
                        element: <ShowAnswerAndQuestionPage />
                    }
                ]
            },
            {
                path: '/admin',
                element: <PageShield children={<SideBarAdmin />} pageType="admin" />,
                children: [
                    {
                        path: '/admin/users',
                        element: <UserPageAdmin />
                    },
                    {
                        path: '/admin/question',
                        element: <QuestionPageAdmin />
                    },
                    {
                        path: '/admin/answer',
                        element: <AnswerPageAdmin />
                    },
                    {
                        path: '/admin/report',
                        element: <ReportPageAdmin />
                    }
                ]
            },
            {
                path: '/create/answer/:questionID',
                element: <AnswerPage />,
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
        ],
        errorElement: <p>page not found</p>
    }
])