import { useLoaderData } from "react-router-dom"
import { getOneUser } from "../../api"
import userProfile from "../../assets/user-profile.svg"

export async function userPageLoader({ params }: any) {
    const user = await getOneUser(params.userID)
    
    return user
}

export function UserPage() {
    const data = useLoaderData()
    
    return (
        <div className="h-screen flex flex-col justify-center mt-2 lg:justify-between mx-10">
                <div className="flex h-max">
                    <div className="relative w-28 md:w-38 md:h-38 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <img src={userProfile} alt="" />
                    </div>
                    <div className="self-center ms-2">
                        <p className="text-2xl font-bold text-slate-700">Hadi Suhadi</p>
                        <p>10 poin</p>
                    </div>
                </div>
                <div>
                    <button>jawaban</button>
                    <button>pertanyaan</button>
                </div>
        </div>
    )
}