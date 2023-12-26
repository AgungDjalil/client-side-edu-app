import axios from "axios";
import { ReactNode, useState, createContext, useContext, useEffect } from "react";

type ResponseFormat = {
    error: string,
    message: string,
    statusCode: number,
    role: string
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
    isReady: boolean,
    userID: string
}

export const AuthContext = createContext({} as AuthContext)

export function useAuthContext() {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [accessToken, setAccessToken] = useState(String)
    const [isReady, setIsReady] = useState(false)
    const [userRole, setUserRole] = useState(String)
    const [userID, setUserID] = useState(String)

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedRole = localStorage.getItem('role');
        const storedID = localStorage.getItem('userID');
        
        // localStorage.removeItem('token')
        // localStorage.removeItem('role')
        // localStorage.removeItem('userID')

        if (storedToken && storedRole && storedID) {
            setAccessToken(JSON.parse(storedToken))
            setUserRole(JSON.parse(storedRole))
            setUserID(JSON.parse(storedID))
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

    async function signIn(usernameOrPassword: string, password: string) {
        try {
            const data = usernameOrPassword.includes('@gmail.com') ? 
                { email: usernameOrPassword, password } : { username: usernameOrPassword,password }

            const result = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/login`, 
                data
            )

            const { access_token, role, userID } = result.data

            localStorage.setItem('token', JSON.stringify(access_token))
            localStorage.setItem('role', JSON.stringify(role))
            localStorage.setItem('userID', JSON.stringify(userID))
            setUserRole(role)
            setAccessToken(access_token)
            setUserID(userID)

            return {
                data: result.data,
                statusCode: result.status,
                role: role
            }

        } catch (result: any) {
            const { response } = result
            return response.data
        }
    }

    function signOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('userID')
        setUserID('')
        setAccessToken('')
        setUserRole('')
    }

    return(
        <>
            <AuthContext.Provider value={{
                accessToken, userRole,
                signIn, signOut,
                register,
                isReady,
                userID
            }}> 
                {children}
            </AuthContext.Provider>
        </>
    )
}