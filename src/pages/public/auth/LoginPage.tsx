import { useState } from "react"
import { useAuthContext } from "../../../context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"

export function LoginPage() {
    const { signIn, accessToken, isReady, userRole } = useAuthContext()
    const [isRedirect, setIsRedirect] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if(!accessToken && !isReady && isRedirect && !userRole)
        return <h1>Loading.....</h1>

    if(accessToken && isReady && isRedirect && userRole === 'admin')
        return <Navigate to={'/admin'} />

    if(accessToken && isReady && isRedirect && userRole === 'moderator')
        return <Navigate to={'/moderator'} />

    if(accessToken && isReady && isRedirect && userRole === 'user')
        return <Navigate to={'/'} />

    function handleSubmit(event: any) {
        event.preventDefault()
        setIsRedirect(true)
        signIn(username, password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>submit</button>
            </form>
        </>
    )
}