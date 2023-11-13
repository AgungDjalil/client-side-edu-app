import axios from "axios";
import { ReactNode, useState, createContext, useContext, useEffect, useDebugValue } from "react";

type AuthContextProviderProps = {
    children: ReactNode
}

type AuthContext = {
    accessToken: string,
    userRole: string,
    signIn: (username: string, password: string) => void,
    signOut: () => void,
    isReady: boolean
}

export const AuthContext = createContext({} as AuthContext)

export function useAuthContext() {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [accessToken, setAccessToken] = useState(String)
    const [isReady, setIsReady] = useState(false)
    const [userRole, setUserRole] = useState(String)

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedRole = localStorage.getItem('role');

        if (storedToken && storedRole) {
            setAccessToken(JSON.parse(storedToken))
            setUserRole(JSON.parse(storedRole))
        }

        setIsReady(true)

    }, []);

    async function signIn(username: string, password: string) {
        try {
            const response = await axios.post(
                'http://localhost:3000/api/auth/login', 
                { username, password }
            )

            const { access_token, role } = response.data

            localStorage.setItem('token', JSON.stringify(access_token))
            localStorage.setItem('role', JSON.stringify(role))

        } catch (err) {
            console.log(err)
        }
    }

    function signOut() {
        localStorage.removeItem('token')
        setAccessToken('')
    }

    return(
        <>
            <AuthContext.Provider value={{
                accessToken, userRole,
                signIn, signOut,
                isReady
            }}> 
                {children}
            </AuthContext.Provider>
        </>
    )
}