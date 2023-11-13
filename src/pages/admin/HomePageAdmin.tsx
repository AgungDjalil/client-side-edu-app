import { useAuthContext } from "../../context/AuthContext"

export function HomePageAdmin() {
    const { userRole, isReady } = useAuthContext()

    if(!isReady && !userRole) 
        return <h1>loading.....</h1>

    if(isReady && userRole !== 'admin')
        return <h1>page not found</h1>

    return (
        <>
            <h1>ini halaman admin</h1>
        </>
    )
}