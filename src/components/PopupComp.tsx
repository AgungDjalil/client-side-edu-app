import { deleteAnswer, deleteCategory, deleteComment, deleteQuestion, deleteTag, deleteUser } from "../api"
import { useState } from "react"

export function PopupComp({ ID, type }: any) {
    const [isPopupOpen, setPopupOpen] = useState(false)

    const handleSubmitDelete = async (ev: any) => {
        setPopupOpen(false)
        window.location.reload()
        // ev.preventDefault()

        if (type === "tag") await deleteTag(ID)

        if(type === "category") await deleteCategory(ID)

        if(type === "user") await deleteUser(ID)

        if(type === "question" && Array.isArray(ID)) await deleteQuestion(ID[0], ID[1])

        if(type === "answer" && Array.isArray(ID)) await deleteAnswer(ID[0], ID[1])

        if(type === "comment" && Array.isArray(ID)) await deleteComment(ID[0], ID[1])
    }

    return (
        <td className="px-6 py-4 flex">
            <div className="hidden"></div>
            <div className="relative ms-2">
                <button onClick={() => setPopupOpen(true)} className="bg-red-500 text-white p-2 rounded">
                    Delete
                </button>
                {isPopupOpen && (
                    <form onSubmit={handleSubmitDelete} className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded shadow-md">
                            <p className="mb-4 text-black">Are you sure you want to delete?</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setPopupOpen(false)}
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
                        </div>
                    </form>
                )}
            </div>
        </td>

    )
}