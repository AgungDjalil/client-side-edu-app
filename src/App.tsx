import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AuthContextProvider } from "./context/AuthContext";

export function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

