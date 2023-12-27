import { useEffect, useState } from "react"
import { getAllUser } from "../../../api"
import { LoadingComp } from "../../../components/LoadingComp"
import { TableComp } from "../../../components/admin/TableComp"

export function UserPageAdmin() {
    const [users, setUsers] = useState(Array)
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const setUserData = async (searchValue: string) => {
            const user = await getAllUser(searchValue)
            setUsers(user)
        }

        setUserData(searchValue)
        setIsLoading(false)
    }, [searchValue])

    if (isLoading) return <LoadingComp />
    
    return (
        <main className="p-4 ml-64">
            <div className="relative mb-5">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input onChange={ev => setSearchValue(ev.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search username, email...." required />
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <TableComp
                    colName={[
                        "username", "email", "point", "joinAt"
                    ]}
                    attributs={[
                        "username", "email", "point", "joinAt"
                    ]}
                    data={users}
                />
            </div>
        </main>
    )
}