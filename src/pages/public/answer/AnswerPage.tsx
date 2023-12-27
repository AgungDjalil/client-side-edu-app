import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createAnswer, getOneQuestion } from "../../../api"
import { LoadingComp } from "../../../components/LoadingComp"

export function AnswerPage() {
    const { questionID } = useParams()
    const [question, setQuestion] = useState<any>()
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()

    const hanldeSubmit = async (ev: any) => {
        ev.preventDefault()
        if(questionID) {
            const result = await createAnswer(questionID, answer)
            if(result.createdAt) navigate(`/answer/${questionID}`)
        }
    }

    useEffect(() => {
        const getData = async () => {
            if (questionID) {
                const data = await getOneQuestion(questionID)
                setQuestion(data)
            }
        }
        getData()
    }, [])

    if (!question) return <LoadingComp />
    
    return (
        <div className="bg-primaryBg h-screen text-center">
            <div className="flex w-full justify-center flex-wrap">
                <div className="flex me-10 mt-10 flex-col">
                    <p className="text-2xl font-bold text-gray-600">Pertanyaan: <span className="text-gray-400"><br />{question.questionText}</span></p>
                </div>
                <form onSubmit={hanldeSubmit} className="p-4 w-full">
                    <textarea
                        onChange={ev => setAnswer(ev.target.value)}
                        id="message"
                        rows={20}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="tulis jawabanmu..."
                    ></textarea>
                    <div className="flex justify-end">
                        <button type="submit" className="p-2 bg-slate-500 rounded-lg mt-2 text-white">Tambahkan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}