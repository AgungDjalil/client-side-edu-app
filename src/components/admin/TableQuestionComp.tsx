import { PopupComp } from "../PopupComp"

export function TableQuestionComp({ data }: any) {
    
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            report message
                        </th>
                        <th scope="col" className="px-6 py-3">
                            question text
                        </th>
                        <th scope="col" className="px-6 py-3">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(({ reportID, reportMessage, reportedQuestionID }: any) => (
                            <tr className="odd:bg-white even:bg-gray-50 border-b">
                                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                    {reportMessage}
                                </td>
                                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                    {reportedQuestionID?.questionText}
                                </td>
                                <PopupComp
                                    ID={[reportedQuestionID?.questionID, reportID]}
                                    type="question"
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}