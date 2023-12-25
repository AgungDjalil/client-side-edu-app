import axios from "axios";
import { ReactNode, useState, createContext, useContext, useEffect } from "react";

type ResponseFormat = {
    error: string,
    message: string,
    statusCode: number,
}

type AuthContextProviderProps = {
    children: ReactNode
}

type AuthContext = {
    accessToken: string,
    userRole: string,
    signIn: (username: string, password: string) => Promise<ResponseFormat>,
    signOut: () => void,
    register: (username: string, email: string, password: string) => Promise<ResponseFormat>,
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

    async function register(username: string, email: string, password: string) {
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
                username, email, password
            })
            
            return {
                data: result.data,
                statusCode: result.status
            }

        } catch (result: any) {
            const { response } = result
            return response.data
        }
    }

    async function signIn(username: string, password: string) {
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/login`, 
                { username, password }
            )

            const { response } = data
            const { access_token, role } = response.data

            localStorage.setItem('token', JSON.stringify(access_token))
            localStorage.setItem('role', JSON.stringify(role))

            return response.data

        } catch (data: any) {
            const { response } = data
            return response.data
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
                register,
                isReady
            }}> 
                {children}
            </AuthContext.Provider>
        </>
    )
}