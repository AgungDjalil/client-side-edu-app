import { useAuthContext } from "../../context/AuthContext"

export function HomePage() {
    const { signOut, userRole } = useAuthContext()

    function handleClicl() {
        signOut()
    }

    console.log(userRole === 'admin')

    return (
        <>
            <button onClick={handleClicl}>logout</button>
            {userRole}
            <h1>ini adalah homepage</h1>
        </>
    )
}