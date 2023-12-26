import axios from "axios";
import { ReactNode, createContext, useContext } from "react";

type QuestionContextProviderProps = {
    children: ReactNode
}

type QuestionContextObject = {
    createQuestion: (questionText: string, categoryID: string, tagID: string) => void
}

export const QuestionContext = createContext({} as QuestionContextObject)

export function useQuestionContext() {
    return useContext(QuestionContext)
}

export function QuestionContextProvider({ children }: QuestionContextProviderProps) {

    async function createQuestion(questionText: string, categoryID: string, tagID: string) {
        try {
            const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/questions/create`, {
                questionText,
                categoryID,
                tagID
            })

            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <QuestionContext.Provider
                value={{
                    createQuestion
                }}
            >
                {children}
            </QuestionContext.Provider>
        </>
    )
}