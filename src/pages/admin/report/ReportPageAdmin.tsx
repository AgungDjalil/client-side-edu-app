import { useEffect, useState } from "react";
import { LoadingComp } from "../../../components/LoadingComp";
import { getReportedData } from "../../../api";
import { TableUserComp } from "../../../components/admin/TableUserComp";
import { TableQuestionComp } from "../../../components/admin/TableQuestionComp";
import { TableAnswerComp } from "../../../components/admin/TableAnswerComp";
import { TableCommentComp } from "../../../components/admin/TableCommentComp";

export function ReportPageAdmin() {
    const [dataReport, setDataReport] = useState([])
    const [fetchType, setFetchType] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const handleChange = (ev: any) => {
        setIsLoading(true)
        setFetchType(ev.target.value)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getReportedData(fetchType)
            console.log(data)
            await setDataReport(data)
            setIsLoading(false)
        }
        getData()
    }, [setFetchType, setFetchType, handleChange, isLoading, setIsLoading, setDataReport, dataReport])

    if (isLoading) return <LoadingComp />

    return (
        <main className="p-4 ml-64">
            <div className="mb-5">
                <div className="flex flex-wrap gap-1 mt-2">
                    <select onChange={ev => handleChange(ev)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>filter</option>
                        <option value="user">reported user</option>
                        <option value="question">reported question</option>
                        <option value="answer">reported answer</option>
                        <option value="comment">reported comment</option>
                    </select>
                </div>
            </div>
            {
                fetchType === 'user' || fetchType === undefined ? (
                    <TableUserComp data={dataReport} />
                ) : fetchType === 'question' ? (
                    <TableQuestionComp data={dataReport} />
                ) : fetchType === 'answer' ? (
                    <TableAnswerComp data={dataReport} />
                ) : fetchType === 'comment' ? (
                    <TableCommentComp data={dataReport} />
                ) : (
                    ''
                )
            }
        </main>
    )
}