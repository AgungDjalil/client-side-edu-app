import { useLoaderData } from "react-router-dom"
import { getOneUser, getQuestionByUser } from "../../api"
import userProfile from "../../assets/user-profile.svg"
import { ShowUserQuestion } from "../../components/ShowUserQuestion"
import { useState } from "react"

export async function userPageLoader({ params }: any) {
    const user = await getOneUser(params.userID)

    return user
}

export function UserPage() {
    const data: any = useLoaderData()
    const [counter, setCounter] = useState(true)

    return (
        <div className="mx-2 h-max ">
            <div className="flex justify-between h-max w-full mt-2 mb-6">
                <div className="flex h-max">
                    <div className="relative w-28 md:w-38 md:h-38 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <img src={userProfile} alt="" />
                    </div>
                    <div className="self-center ms-2">
                        <p className="text-2xl font-bold text-slate-700">{data.username}</p>
                        <p>{data.point}</p>
                    </div>
                </div>
                <div className="self-center text-white">
                    <button onClick={ev => setCounter(true)} className="bg-teal-500 p-2 rounded-lg">jawaban</button>
                    <button onClick={ev => setCounter(false)} className="bg-teal-500 p-2 rounded-lg ms-2">pertanyaan</button>
                </div>
            </div>
            {
                counter && <ShowUserQuestion userID={data.userID} />
            }
            {
                !counter && <p>ini answer</p>
            }
        </div>
    )
}