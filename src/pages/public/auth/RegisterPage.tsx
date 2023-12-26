import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { RedirectComp } from "../../../components/RedirectComp";

export function RegisterPage() {
    const { register } = useAuthContext()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (ev: React.FormEvent<HTMLElement>) => {
        ev.preventDefault()
        setloading(true)
        const result = await register(username, email, password)

        if(result.statusCode >= 200 && result.statusCode <= 300) return navigate("/home")

        if(result.message) {
            setloading(false)
            setErrorMessage(result.message)
        }
    }

    if(loading) return <RedirectComp />

    return (
        <section className="bg-primaryBg h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-white rounded-lg shadow-lg max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-center">
                            Register An Account
                        </h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input onChange={ev => setEmail(ev.target.value)} type="email" className="border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@gmail.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium">
                                    username 
                                    {
                                        errorMessage.includes('Username') && <span className="text-red-700 ms-2">{errorMessage}*</span> 
                                    }
                                </label>
                                <input onChange={ev => setUsername(ev.target.value)} type="text" className="border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">
                                    Password
                                    {
                                        errorMessage.includes('Email') && <span className="text-red-700 ms-2">{errorMessage}*</span>
                                    }
                                </label>
                                <input onChange={ev => setPassword(ev.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true} />
                            </div>
                            <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">register</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account yet? <NavLink to={'/login'} className="font-medium hover:underline">Sign in</NavLink>
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