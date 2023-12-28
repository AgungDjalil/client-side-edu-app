import { useEffect, useState } from "react"
import { createCategory, getAllCategory } from "../../../api"
import { LoadingComp } from "../../../components/LoadingComp"
import { PopupComp } from "../../../components/PopupComp"

export function CategoryPage() {
    const [categories, setCategories] = useState([])
    const [fetchType, setFetchType] = useState<string>('')
    const [isCreateCategoryOpen, setCreateCategoryPopup] = useState<boolean>(false)
    const [categoryName, setCategoryName] = useState<string>()

    const handleSubmitCategory = async () => {
        const result = await createCategory(categoryName)
        console.log(result)
    }   

    useEffect(() => {
        const getData = async () => {
            const data = await getAllCategory(fetchType)
            setCategories(data)
        }
        getData()
    }, [fetchType, setCategoryName, setFetchType])

    if (!categories) return <LoadingComp />

    return (
        <div className="m-2">
            <div className="text-white m-2 flex gap-2">
                <button onClick={() => setCreateCategoryPopup(true)} className="p-2 bg-cyan-600 rounded-lg">Buat Category</button>
                <div className="flex flex-wrap gap-1">
                    <select onChange={ev => setFetchType(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected value="semua">filter</option>
                        <option value="moderator">Semua category (Banned Suspended)</option>
                        <option value="userTag">category yang dilihat user</option>
                    </select>
                </div>
                {
                    isCreateCategoryOpen &&
                    <div className="bg-transparent p-4 rounded shadow-md fixed inset-0 flex items-center justify-center" style={{ zIndex: 9999 }}>
                        <form onSubmit={handleSubmitCategory} className="fixed bg-gray-400 p-4 rounded-lg">
                            <div className="mt-3">
                                <input onChange={ev => setCategoryName(ev.target.value)} placeholder="Nama Tag" type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="flex justify-end mt-2">
                                <button
                                    onClick={() => setCreateCategoryPopup(false)}
                                    className="bg-slate-700 text-white px-3 py-1 rounded mr-2"
                                >
                                    No
                                </button>
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Yes
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Category Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                create At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(({ categoryName, createdAt, categoryID }: any) => (
                                <tr key={categoryID} className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {categoryName}
                                    </td>
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {createdAt}
                                    </td>
                                    <PopupComp
                                        ID={categoryID}
                                        type="category"
                                    />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}