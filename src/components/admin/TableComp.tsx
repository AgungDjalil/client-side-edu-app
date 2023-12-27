import React from "react"

export function TableComp({ colName, data, attributs }: { attributs: string[], colName: string[], data: any[] }) {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                        {
                            colName.map((title) => (
                                <th scope="col" key={title} className="px-6 py-3">
                                    {title}
                                </th>
                            ))
                        }
                        <th scope="col" className="px-6 py-3">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((result, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                            {attributs.map((attribut, attributIndex) => (
                                <td key={attributIndex} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {result[attribut]}
                                </td>
                            ))}
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}