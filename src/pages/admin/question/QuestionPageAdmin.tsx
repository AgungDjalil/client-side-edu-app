import { useEffect, useState } from "react"
import { LoadingComp } from "../../../components/LoadingComp"
import { getAllQuestionsForAdmin } from "../../../api"
import { PopupComp } from "../../../components/PopupComp"

export function QuestionPageAdmin() {
    const [questions, setQuestion] = useState(Array)

    useEffect(() => {
        const getQuestion = async () => {
            const data = await getAllQuestionsForAdmin()
            setQuestion(data)
            console.log(data)
        }
        getQuestion()
    }, [])

    if (!questions) return <LoadingComp />

    return (
        <main className="p-4 ml-64">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                question text
                            </th>
                            <th scope="col" className="px-6 py-3">
                                created at
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map(({ questionID, questionText, createdAt }: any) => (
                                <tr className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {questionText}
                                    </td>
                                    <td className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap`}>
                                        {createdAt}
                                    </td>
                                    <PopupComp
                                        ID={questionID}
                                        type="question"
                                    />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}