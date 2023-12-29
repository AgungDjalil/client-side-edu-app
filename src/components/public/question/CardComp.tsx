import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReportComp } from "../report/ReportComp";

export function CardComp({ questionText, mapel, questionID }: { questionText: string, mapel: string, questionID: string }) {
    const [isReportPopupOpen, setReportPopupOpen] = useState(false);

    return (
        <div className="flex flex-col h-max bg-white rounded-lg mb-4">
            <div className="flex h-max ms-2 mt-2 gap-2">
                <NavLink to={"/"} className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </NavLink>
                <NavLink className="self-center underline" to={"/"}>{mapel}</NavLink>
            </div>
            <NavLink to={`/answer/${questionID}`} className="mx-2 my-2 hover:underline">
                {
                    questionText.length > 200 ? questionText.slice(0, 200) + "....." : questionText
                }
            </NavLink>
            <div className="self-end me-2 mb-2 flex gap-2">
                <button onClick={() => setReportPopupOpen(true)} className="self-center">
                    <svg width="20px" height="20px" viewBox="-6.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>menu_option [#1374]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-306.000000, -800.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M253.5,658 C252.857167,658 252.333333,657.551 252.333333,657 C252.333333,656.449 252.857167,656 253.5,656 C254.142833,656 254.666667,656.449 254.666667,657 C254.666667,657.551 254.142833,658 253.5,658 M253.5,654 C251.566833,654 250,655.343 250,657 C250,658.657 251.566833,660 253.5,660 C255.433167,660 257,658.657 257,657 C257,655.343 255.433167,654 253.5,654 M253.5,651 C252.857167,651 252.333333,650.551 252.333333,650 C252.333333,649.449 252.857167,649 253.5,649 C254.142833,649 254.666667,649.449 254.666667,650 C254.666667,650.551 254.142833,651 253.5,651 M253.5,647 C251.566833,647 250,648.343 250,650 C250,651.657 251.566833,653 253.5,653 C255.433167,653 257,651.657 257,650 C257,648.343 255.433167,647 253.5,647 M253.5,642 C254.142833,642 254.666667,642.449 254.666667,643 C254.666667,643.551 254.142833,644 253.5,644 C252.857167,644 252.333333,643.551 252.333333,643 C252.333333,642.449 252.857167,642 253.5,642 M253.5,646 C255.433167,646 257,644.657 257,643 C257,641.343 255.433167,640 253.5,640 C251.566833,640 250,641.343 250,643 C250,644.657 251.566833,646 253.5,646" id="menu_option-[#1374]">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <NavLink to={`/create/answer/${questionID}`} className="bg-slate-800 rounded-lg w-max p-2 text-white">+ Jawab</NavLink>
            </div>

            {isReportPopupOpen && (
                <ReportComp
                    type="question"
                    id={questionID}
                    setReportPopupOpen={setReportPopupOpen}
                />
            )}
        </div>
    )
}