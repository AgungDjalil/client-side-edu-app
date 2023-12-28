import { useEffect, useState } from "react"
import { editAnswer, getOneAnswer } from "../../../api"
import { LoadingComp } from "../../../components/LoadingComp"
import { useNavigate, useParams } from "react-router-dom"
import { NavbarComp } from "../../../components/public/NavbarComp"

export function EditAnswerPage() {
    const { answerID } = useParams()
    const [answerText, setAnswerText] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    const hanldeSubmit = async (ev: any) => {
        ev.preventDefault()
        const result = await editAnswer(answerID, answerText)
        if(result.createdAt) navigate(`/showAnswer/${answerID}`)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getOneAnswer(answerID)
            setAnswerText(data.answerText)
            setIsLoading(false)
        }
        getData()
    }, [])

    if (isLoading) return <LoadingComp />

    return (
        <div className="h-screen bg-primaryBg">
            <NavbarComp />
            <div className="bg-primaryBg h-screen text-center">
                <div className="flex w-full justify-center flex-wrap">
                    <div className="flex me-10 mt-10 flex-col">
                        <p className="text-2xl font-bold text-gray-600">Pertanyaan: <span className="text-gray-400"><br />syalalal</span></p>
                    </div>
                    <form onSubmit={hanldeSubmit} className="p-4 w-full">
                        <textarea
                            value={answerText}
                            onChange={ev => setAnswerText(ev.target.value)}
                            id="message"
                            rows={20}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="tulis jawabanmu..."
                        ></textarea>
                        <div className="flex justify-end">
                            <button type="submit" className="p-2 bg-slate-500 rounded-lg mt-2 text-white">edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}