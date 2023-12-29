import { useLoaderData } from "react-router-dom"
import { getOneUser, getQuestionByUser } from "../../api"
import userProfile from "../../assets/user-profile.svg"
import { ShowUserQuestion } from "../../components/public/question/ShowUserQuestion"
import { useState } from "react"
import { AnswerUserComp } from "../../components/public/answer/AnswerUserComp"
import { ReportComp } from "../../components/public/report/ReportComp"

export async function userPageLoader({ params }: any) {
    const user = await getOneUser(params.userID)

    return user
}

export function UserPage() {
    const data: any = useLoaderData()
    const [counter, setCounter] = useState(true)
    const [isReportPopupIsOpen, setReportPopup] = useState<boolean>(false)

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
                    <button onClick={() => setReportPopup(true)} className="flex self-center ms-4">
                        <p>Report</p>
                        <svg className="self-center w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z" fill="#0F0F0F"></path> </g></svg>
                    </button>
                </div>
                <div className="self-center text-white">
                    <button onClick={ev => setCounter(true)} className="bg-teal-500 p-2 rounded-lg">jawaban</button>
                    <button onClick={ev => setCounter(false)} className="bg-teal-500 p-2 rounded-lg ms-2">pertanyaan</button>
                </div>
            </div>
            {
                isReportPopupIsOpen &&
                    <ReportComp
                        id={data.userID}
                        type="user"
                        setReportPopupOpen={setReportPopup}
                    />
            }
            {
                counter && <ShowUserQuestion userID={data.userID} />
            }
            {
                !counter && <AnswerUserComp userID={data.userID} />
            }
        </div>
    )
}