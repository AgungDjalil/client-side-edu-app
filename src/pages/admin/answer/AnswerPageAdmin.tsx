import { useEffect, useState } from "react"
import { getAllAnswerForAdmin } from "../../../api"
import { LoadingComp } from "../../../components/LoadingComp"
import { PopupComp } from "../../../components/PopupComp"

export function AnswerPageAdmin() {
    const [answer, setAnswer] = useState(Array)

    useEffect(() => {
        const setData = async () => {
            const data = await getAllAnswerForAdmin()
            setAnswer(data)
            console.log(data)
        }

        setData()
    }, [])

    if (!answer) return <LoadingComp />

    return (
        <div className="p-4 ml-64">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                answer text
                            </th>
                            <th scope="col" className="px-6 py-3">
                                created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            answer.map(({answerID, answerText, createdAt}: any) => (
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {answerText}
                                    </td>
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {createdAt}
                                    </td>
                                    <PopupComp 
                                        ID={answerID}
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