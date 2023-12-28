import { useEffect, useState } from "react"
import { getAllUser } from "../../../api"
import { LoadingComp } from "../../../components/LoadingComp"
import { PopupComp } from "../../../components/PopupComp"
import { PaginationComp } from "../../../components/PaginationComp"

export function UserPageAdmin() {
    const [users, setUsers] = useState<any>()
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [fetchType, setFetchType] = useState<string>()
    const [isPaginationOn, setPagination] = useState(false)
    const [page, setPage] = useState<any>()

    useEffect(() => {
        const setUserData = async (searchValue: string) => {
            const user = await getAllUser(searchValue, fetchType)
            if(user.meta && user.data) {
                await setUsers(user.data)
                await setPage(user.meta)
                setPagination(true)
                setIsLoading(false)
            } else {
                await setUsers(user)
                setPagination(false)
                setIsLoading(false)
            }
        }
        setUserData(searchValue)
    }, [searchValue, setFetchType, setFetchType, isLoading, users, setUsers])

    if (isLoading) return <LoadingComp />

    return (
        <main className="p-4 ml-64">
            <div className="mb-5">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={ev => setSearchValue(ev.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search username, email...." required />
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                    <select onChange={ev => setFetchType(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>filter</option>
                        <option value="all">Semua user (Banned Suspended)</option>
                        <option value="">user yang tidak di banned atau suspended</option>
                    </select>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                join At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(({ email, username, joinAt, userID }: any) => (
                                <tr key={userID} className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {email}
                                    </td>
                                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {username}
                                    </td>
                                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {joinAt}
                                    </td>
                                    <PopupComp
                                        ID={userID}
                                        type="user"
                                    />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {isPaginationOn &&
                <div className="mt-2">
                    <PaginationComp
                        setPage={setSearchValue}
                        hasNextPage={page.hasNextPage}
                        hasPreviousPage={page.hasPreviousPage}
                        pageCount={page.pageCount}
                    />
                </div>}
        </main>
    )
}