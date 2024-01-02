import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllUnverifiedAnswer, verifyAnswer } from "../../../api";
import { LoadingComp } from "../../../components/LoadingComp";

export function AnswerPageModerator() {
    const [data, setData] = useState(Array)

    const handleSubmit = async (ev: any, answerID: string) => {
        const result = await verifyAnswer(answerID)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getAllUnverifiedAnswer()
            setData(data)
        }
        getData()
    }, [])

    if (!data) return <LoadingComp />

    return (
        <div className="bg-primaryBg h-full p-2 mb-16">
            {
                data.map(({ answerID, answerText, questionID }: any) => (
                    <div className="flex flex-col bg-white m-5 rounded-lg p-5">
                        <div className="bg-primaryBg p-4 rounded-lg">
                            <p className="text-2xl text-gray-400 font-bold mb-2">Pertanyaan:</p>
                            <p>{questionID.questionText}</p>
                        </div>
                        <div className="bg-primaryBg p-4 rounded-lg mt-4">
                            <p className="text-2xl text-gray-400 font-bold mb-2">Jawaban:</p>
                            {answerText}
                            <form onSubmit={ev => handleSubmit(ev, answerID)} className="flex justify-end">
                                <button className="bg-green-600 text-white p-2 rounded-full">Verify</button>
                            </form>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}