import { useEffect, useState } from "react"
import { getAllAnswerForAdmin } from "../../../api"
import { LoadingComp } from "../../../components/LoadingComp"
import { TableComp } from "../../../components/admin/TableComp"

export function AnswerPageAdmin() {
    const [answer, setAnswer] = useState(Array)

    useEffect(() => {
        const setData = async () => {
            const data = await getAllAnswerForAdmin()
            setAnswer(data)
        }

        setData()
    }, [])

    if (!answer) return <LoadingComp />

    console.log(answer)
    return (
        <div className="p-4 ml-64">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <TableComp
                    attributs={[
                        "answerText",
                        "createdAt"
                    ]}
                    colName={[
                        "Answer Text",
                        "Created At"
                    ]}
                    data={answer}
                />
            </div>
        </div>
    )
}