import { useEffect, useState } from "react"
import { LoadingComp } from "../../../components/LoadingComp"
import { getAllQuestionsForAdmin } from "../../../api"
import { TableComp } from "../../../components/admin/TableComp"

export function QuestionPageAdmin() {
    const [questions, setQuestion] = useState(Array)

    useEffect(() => {
        const getQuestion = async () => {
            const data = await getAllQuestionsForAdmin()
            setQuestion(data)
        }
        getQuestion()
    }, [])

    if(!questions) return <LoadingComp />

    return (
        <div className="p-4 ml-64">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Question Text
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Create At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        questions.map(({questionText, createdAt, questionID}: any) => (
                            <TableComp 
                                key={questionID}
                                col1={questionText}
                                col2={createdAt} 
                                ID={questionID}                            
                            />
                        ))
                    }
                </table>
            </div>
        </div>
    )
}