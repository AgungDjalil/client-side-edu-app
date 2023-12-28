import { NavLink, useParams } from "react-router-dom";
import { NavbarComp } from "../../../components/public/NavbarComp";
import { useEffect, useState } from "react";
import { getOneAnswer } from "../../../api";
import { LoadingComp } from "../../../components/LoadingComp";

export function ShowAnswer() {
    const { answerID } = useParams()
    const [answer, setAnswer] = useState<any>()

    useEffect(() => {
        const getData = async () => {
            const data = await getOneAnswer(answerID)
            setAnswer(data)
            console.log(data)
        }
        getData()
    }, [])

    if(!answerID) return <LoadingComp />

    return (
        <div className="h-screen bg-primaryBg">
            <NavbarComp />
            <div className="bg-white mx-28 mt-2 p-2 rounded-lg">
                {answer && answer.answerText}
                <div className="flex justify-between my-4 mt-4">
                    <div className="self-end me-2 mb-2">
                        <NavLink to={`/editAnswer/${answer && answer.answerID}`} className="bg-slate-800 rounded-lg w-max p-2 text-white">Edit</NavLink>
                    </div>
                    <div className="self-end me-2 mb-2">
                        <NavLink to={`/home`} className="bg-cyan-400 rounded-lg w-max p-2 text-white">selesai</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}