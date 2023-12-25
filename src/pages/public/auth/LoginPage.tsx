import { useState } from "react"
import { useAuthContext } from "../../../context/AuthContext"
import { NavLink, Navigate } from "react-router-dom"

export function LoginPage() {
    const { signIn, accessToken, isReady, userRole } = useAuthContext()
    const [isRedirect, setIsRedirect] = useState(false)
    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')

    if (!accessToken && !isReady && isRedirect && !userRole) return <h1>Loading.....</h1>

    if (accessToken && isReady && isRedirect && userRole === 'admin') return <Navigate to={'/admin'} />

    if (accessToken && isReady && isRedirect && userRole === 'moderator') return <Navigate to={'/moderator'} />

    if (accessToken && isReady && isRedirect && userRole === 'user') return <Navigate to={'/'} />

    async function handleSubmit(event: any) {
        event.preventDefault()
        const isSuccess = await signIn(usernameOrEmail, password)
        if(isSuccess) setIsRedirect(true)
    }

    return (
        <section className="bg-primaryBg h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-white rounded-lg shadow-lg max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-center">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Your email or username</label>
                                <input onChange={ev => setUsernameOrEmail(ev.target.value)} type="text" className="border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@gmail.com or username" required={true} />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Password</label>
                                <input onChange={ev => setPassword(ev.target.value)} type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required={true} />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don't have an account yet? <NavLink to={'/register'} className="font-medium hover:underline">Sign up</NavLink>
                            </p>
                            <p className="mt-3 text-sm font-light text-gray-500">
                                <NavLink to={'/'}>Home...</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}