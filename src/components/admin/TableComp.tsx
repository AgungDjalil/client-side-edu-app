export function TableComp({ col1, col2, ID}: {col1: string, col2: string, ID: string}) {
    return (
        <tbody>
            <tr className="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {col1.length > 50 ? col1.slice(0, 50) + "...." : col1}
                </th>
                <td className="px-6 py-4">
                    {col2}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    )
}