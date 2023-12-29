import { useEffect, useState } from "react"
import { LoadingComp } from "../../../components/LoadingComp"
import { PopupComp } from "../../../components/PopupComp"
import { createTag, getAllTags } from "../../../api";

export function Tag() {

    const [tags, setTags] = useState<{ tagName: string, tagID: string, createAt: string }[]>();
    const [fetchType, setFetchType] = useState<string>()
    const [isCreateTagPopupOpen, setCreateTagPopupOpen] = useState(false);
    const [tagName, setTagName] = useState('')

    const handleSubmitTag = async () => {
        const result = await createTag(tagName)
        console.log(result)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getAllTags(fetchType)
            setTags(data)
        }
        getData()
    }, [fetchType, setTags, setFetchType])

    if (!tags) return <LoadingComp />

    return (
        <div className="m-2">
            <div className="text-white m-2 flex gap-2">
                <button onClick={() => setCreateTagPopupOpen(true)} className="p-2 bg-cyan-600 rounded-lg">Buat Tag</button>
                <div className="flex flex-wrap gap-1">
                    <select onChange={ev => setFetchType(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected value="semua">filter</option>
                        <option value="moderator">Semua tag (Banned Suspended)</option>
                        <option value="userTag">Tag yang dilihat user</option>
                    </select>
                </div>
                {
                    isCreateTagPopupOpen &&
                    <div className="bg-transparent p-4 rounded shadow-md fixed inset-0 flex items-center justify-center" style={{ zIndex: 9999 }}>
                        <form onSubmit={handleSubmitTag} className="fixed bg-gray-400 p-4 rounded-lg">
                            <div className="mt-3">
                                <input onChange={ev => setTagName(ev.target.value)} placeholder="Nama Tag" type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="flex justify-end mt-2">
                                <button
                                    onClick={() => setCreateTagPopupOpen(false)}
                                    className="bg-gray-400 text-white px-3 py-1 rounded mr-2"
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
                                Tag Name
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
                            tags.map(({ tagName, tagID, createAt }: { tagName: string, tagID: string, createAt: string }) => (
                                <tr key={tagID} className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {tagName}
                                    </td>
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {createAt}
                                    </td>
                                    <PopupComp 
                                        key={tagID}
                                        ID={tagID}
                                        type="tag"
                                    />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}