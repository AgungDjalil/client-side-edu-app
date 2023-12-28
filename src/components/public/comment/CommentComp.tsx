import { NavLink } from "react-router-dom";

export function CommentComp({ userID, commentText }: { userID: string, commentText: string}) {
    return (
        <div className="flex items-start gap-2.5 m-2 text-sm">
            <NavLink to={`/profile/${userID}`} className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </NavLink>
            <p className="text-sm font-normal self-center text-gray-900">{commentText}</p>
        </div>
    )
}