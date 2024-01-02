import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export function BottomNavModerator() {
    const { signOut } = useAuthContext()
    const navigate = useNavigate()

    const handleClick = async () => {
        await signOut()
        navigate('/')
    }

    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <NavLink to={"answer"} className="inline-flex flex-col items-center justify-center px-5 group">
                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.001 490.001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <polygon points="115.167,185 177.433,185 145.295,114.698 "></polygon> <path d="M450,0h-410c-22.056,0-40,17.944-40,40v280c0,22.056,17.944,40,40,40h235v120c0,4.118,2.524,7.814,6.358,9.314 c1.184,0.463,2.417,0.687,3.639,0.687c2.738,0,5.42-1.126,7.35-3.218L409.38,360H450c22.056,0,40-17.944,40-40V40 C490,17.944,472.057,0,450,0z M350,115h60v20h-60V115z M255.001,115h80v20h-80V115z M215.907,269.158L186.576,205h-79.982 l-27.402,63.939l-18.383-7.878l75-175c1.559-3.637,5.115-6.013,9.072-6.06c3.981-0.027,7.569,2.243,9.214,5.842l80,175 L215.907,269.158z M330,235h-75v-20h75V235z M435,185h-180v-20h180V185z"></path> </g> </g> </g> </g></svg>
                        <span className="text-sm text-gray-500 group-hover:text-blue-600">Answer</span>
                    </NavLink>
                    <NavLink to={`/moderator/tag`} className="inline-flex flex-col items-center justify-center px-5 group">
                        <svg className="w-7 h-7" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"></path><path d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"></path><path d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path></g></svg>
                        <span className="text-sm text-gray-500 group-hover:text-blue-600">Tag</span>
                    </NavLink>
                    <NavLink to={`/moderator/category`} className="inline-flex flex-col items-center justify-center px-5 group">
                        <svg className="w-8 h-8" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-3.19 -3.19 38.25 38.25" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M28.635,25.181c-0.332-0.592-1.107-1.975-1.91-3.156c-0.271-0.396-0.541-0.766-0.787-1.1 c-0.394-0.534-0.881-1.201-0.886-1.397c0.029-0.868,0.009-2.921,0.003-3.555h0.512v-0.899h-6.479v0.899h0.679 c-0.007,0.634-0.027,2.686,0.002,3.553c-0.004,0.198-0.492,0.865-0.886,1.399c-0.243,0.334-0.516,0.703-0.786,1.1 c-0.803,1.182-1.578,2.564-1.91,3.156l-0.088,0.156c-0.343,0.604-0.346,1.427-0.012,2.002c0.254,0.436,0.663,0.677,1.148,0.677 h10.351h0.001c0.484,0,0.895-0.241,1.146-0.677c0.336-0.575,0.332-1.399-0.01-2.002L28.635,25.181z M28.091,26.964 c-0.118,0.203-0.289,0.308-0.506,0.308H17.234c-0.215,0-0.385-0.104-0.504-0.308c-0.203-0.347-0.195-0.89,0.016-1.263l0.089-0.159 c0.327-0.582,1.093-1.945,1.879-3.101c0.263-0.388,0.529-0.75,0.771-1.079c0.687-0.936,1.043-1.441,1.031-1.863 c-0.027-0.771-0.014-2.567-0.004-3.343h3.803c0.008,0.775,0.022,2.571-0.004,3.343c-0.015,0.422,0.342,0.928,1.028,1.863 c0.241,0.329,0.507,0.691,0.771,1.079c0.785,1.153,1.552,2.519,1.879,3.101l0.089,0.159 C28.287,26.075,28.293,26.617,28.091,26.964z"></path> <path d="M27.596,25.419c-0.193-0.348-0.65-1.162-1.123-1.854c-0.121-0.179-0.24-0.343-0.355-0.5h-7.413 c-0.115,0.157-0.233,0.321-0.354,0.5c-0.473,0.692-0.93,1.507-1.125,1.854l-0.052,0.092c-0.202,0.355-0.202,0.838-0.006,1.177 c0.149,0.257,0.39,0.399,0.675,0.399h0.649h2.405h3.029h2.42h0.635c0.283,0,0.524-0.143,0.674-0.399 c0.195-0.339,0.195-0.821-0.006-1.177L27.596,25.419z"></path> <path d="M26.091,16.338v1.493h0.774v3.453c0.127,0.176,0.255,0.357,0.383,0.545c0.115,0.168,0.227,0.34,0.339,0.512v-4.51h2.792 v7.857c0.001,0.416-0.117,0.764-0.336,0.98c-0.104,0.104-0.232,0.184-0.389,0.235c-0.041,0.245-0.105,0.481-0.227,0.687 c-0.021,0.037-0.048,0.062-0.07,0.096c0.492-0.043,0.897-0.208,1.197-0.508c0.353-0.354,0.547-0.885,0.545-1.5v-7.85h0.774v-1.491 H26.091z"></path> <path d="M29.656,26.184c0.121-0.191,0.123-0.414,0.123-0.459c0-0.085,0-4.035,0-4.035h-1.592c0,0,0,0.752,0,1.608 c0.492,0.812,0.908,1.553,1.135,1.955l0.096,0.168C29.548,25.652,29.616,25.915,29.656,26.184z"></path> <path d="M18.208,20.326c0.394-0.534,0.881-1.2,0.886-1.399c-0.013-0.392-0.016-1.023-0.016-1.657H1.797L0,25.413h15.206 c0.038-0.238,0.101-0.471,0.217-0.675l0.087-0.155c0.333-0.593,1.109-1.977,1.912-3.158 C17.691,21.029,17.962,20.661,18.208,20.326z M10.208,24.292l0.366-1.658h4.29l0.366,1.658H10.208z"></path> <polygon points="18.307,15.464 3.4,15.464 3.4,5.403 10.38,5.403 15.058,5.403 22.038,5.403 22.038,14.475 23.583,14.475 23.583,11.755 23.583,11.755 23.583,3.858 15.386,3.858 10.05,3.858 1.854,3.858 1.854,11.755 1.854,16.753 18.307,16.753 "></polygon> <path d="M8.548,12.602V8.673H7.622c-0.008,0.163-0.046,0.298-0.116,0.41c-0.07,0.112-0.159,0.2-0.268,0.266 c-0.109,0.065-0.231,0.112-0.367,0.14C6.736,9.519,6.597,9.53,6.454,9.526v0.812h0.92v2.263H8.548z"></path> <polygon points="11.695,12.602 11.695,11.608 12.688,11.608 12.688,10.746 11.695,10.746 11.695,9.752 10.833,9.752 10.833,10.746 9.839,10.746 9.839,11.608 10.833,11.608 10.833,12.602 "></polygon> <path d="M15.703,12.602V8.673h-0.926c-0.007,0.163-0.046,0.298-0.116,0.409c-0.07,0.111-0.159,0.2-0.268,0.266 c-0.11,0.066-0.232,0.113-0.367,0.141c-0.136,0.029-0.275,0.041-0.417,0.038v0.811h0.919v2.263H15.703z"></path> <rect x="16.994" y="10.062" width="2.85" height="0.864"></rect> <rect x="16.994" y="11.422" width="2.85" height="0.864"></rect> </g> </g> </g></svg>
                        <span className="text-sm text-gray-500 group-hover:text-blue-600">Category</span>
                    </NavLink>
                    <div>
                        <button onClick={handleClick} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16.125 12C16.125 11.5858 15.7892 11.25 15.375 11.25L4.40244 11.25L6.36309 9.56944C6.67759 9.29988 6.71401 8.8264 6.44444 8.51191C6.17488 8.19741 5.7014 8.16099 5.38691 8.43056L1.88691 11.4306C1.72067 11.573 1.625 11.7811 1.625 12C1.625 12.2189 1.72067 12.427 1.88691 12.5694L5.38691 15.5694C5.7014 15.839 6.17488 15.8026 6.44444 15.4881C6.71401 15.1736 6.67759 14.7001 6.36309 14.4306L4.40244 12.75L15.375 12.75C15.7892 12.75 16.125 12.4142 16.125 12Z" fill="#1C274C"></path> <path d="M9.375 8C9.375 8.70219 9.375 9.05329 9.54351 9.3055C9.61648 9.41471 9.71025 9.50848 9.81946 9.58145C10.0717 9.74996 10.4228 9.74996 11.125 9.74996L15.375 9.74996C16.6176 9.74996 17.625 10.7573 17.625 12C17.625 13.2426 16.6176 14.25 15.375 14.25L11.125 14.25C10.4228 14.25 10.0716 14.25 9.8194 14.4185C9.71023 14.4915 9.6165 14.5852 9.54355 14.6944C9.375 14.9466 9.375 15.2977 9.375 16C9.375 18.8284 9.375 20.2426 10.2537 21.1213C11.1324 22 12.5464 22 15.3748 22L16.3748 22C19.2032 22 20.6174 22 21.4961 21.1213C22.3748 20.2426 22.3748 18.8284 22.3748 16L22.3748 8C22.3748 5.17158 22.3748 3.75736 21.4961 2.87868C20.6174 2 19.2032 2 16.3748 2L15.3748 2C12.5464 2 11.1324 2 10.2537 2.87868C9.375 3.75736 9.375 5.17157 9.375 8Z" fill="#1C274C"></path> </g></svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}