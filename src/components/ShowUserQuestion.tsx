import { useEffect, useState } from "react"
import { getQuestionByUser } from "../api"
import { LoadingComp } from "./LoadingComp"
import { CardComp } from "./public/CardComp"

export function ShowUserQuestion({ userID }: { userID: string }) {
    const [isLoading, setIsLoading] = useState(true)
    const [question, setQuestion] = useState(Array<object>)

    useEffect(() => {
        const getQuestion = async () => setQuestion(await getQuestionByUser(userID))
        getQuestion()
        setIsLoading(false)
    }, [])

    if(isLoading) return <LoadingComp />
    
    return (
        <div className="flex flex-col w-full gap-2">
            {
                question.map(({ questionID, categoryID, questionText }: any) => (
                    <CardComp 
                        key={questionID}
                        mapel={categoryID.categoryName}
                        questionID={questionID}
                        questionText={questionText}
                    />
                ))
            }
        </div>
    )
}