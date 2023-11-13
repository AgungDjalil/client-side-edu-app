import { useAuthContext } from "../../context/AuthContext"

export function HomePageModerator() {
    const { isReady, userRole } = useAuthContext()

    if (!isReady && !userRole) 
        return <h1>Loading....</h1>;

    if (isReady && userRole !== 'moderator' && userRole !== 'admin')
        return <h1>page not found</h1>

    return (
        <>
            <h1>ini adalah halaman moderator</h1>
        </>
    )
}