import { useEffect, useState } from "react"
import { getAllAnswerBasesUser } from "../../api"
import { LoadingComp } from "../LoadingComp"
import { NavLink } from "react-router-dom"

export function AnswerUserComp({ userID }: { userID: string }) {
    const [userAnswer, setUserAnswer] = useState<[]>()

    useEffect(() => {
        const getData = async () => {
            const data = await getAllAnswerBasesUser(userID)
            setUserAnswer(data)
            console.log(data)
        }
        getData()
    }, [])

    if (!userAnswer) return <LoadingComp />

    return (
        <div className="flex flex-col w-full gap-2">
            {
                userAnswer?.map(({ answerText }) => (
                    <div className="flex flex-col h-max bg-white rounded-lg mb-4">
                        <div className="flex h-max ms-2 mt-2 gap-2">
                            <NavLink to={"/"} className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </NavLink>
                        </div>
                        <div className="mx-2 my-2 hover:underline">
                            {answerText}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}