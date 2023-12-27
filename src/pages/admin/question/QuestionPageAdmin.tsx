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
                <TableComp
                    attributs={[
                        "questionText",
                        "createdAt",
                    ]}
                    colName={[
                        "question Text",
                        "create At",
                    ]}
                    data={questions}
                />
            </div>
        </div>
    )
}