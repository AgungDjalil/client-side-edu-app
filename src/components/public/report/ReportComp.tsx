import { useState } from "react";
import { LoadingComp } from "../../LoadingComp";
import { reportAnswer, reportComment, reportQuestion, reportUser } from "../../../api";

export function ReportComp({ setReportPopupOpen, id, type }: any) {
    const [reportMessage, setReportMessage] = useState<string>()
    const [isLoading, setLoading] = useState<boolean>(false)
    
    const handleSubmit = async (ev: any) => {
        setLoading(true)
        // ev.preventDefault()
        if(type === 'question') await reportQuestion(id, reportMessage)

        if(type === 'answer') await reportAnswer(id, reportMessage)

        if(type === 'comment') await reportComment(id, reportMessage)

        if(type === 'user') await reportUser(id, reportMessage)
    }

    if (isLoading) return <LoadingComp />

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Report Message</label>
                    <input onChange={ev => setReportMessage(ev.target.value)} type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button onClick={() => setReportPopupOpen(false)} className="bg-gray-400 text-white px-3 py-1 rounded mt-2">
                    Tutup
                </button>
                <button type="submit" className="bg-red-700 ms-2 text-white px-3 py-1 rounded mt-2">
                    kirim
                </button>
            </form>
        </div>
    )
}