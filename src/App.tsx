import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AuthContextProvider } from "./context/AuthContext";
import { QuestionContextProvider } from "./context/QuestionContext";

export function App() {
  return (
    <>
      <QuestionContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QuestionContextProvider>
    </>
  );
}

