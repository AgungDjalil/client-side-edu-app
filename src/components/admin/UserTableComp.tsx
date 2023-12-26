export function UserTableComp({ username, email, point, userID, joinAt }: { joinAt: string, username: string, email: string, point: number, userID: string }) {
    return (
        <tbody>
            <tr className="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                   {username}
                </th>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4">
                    {point}
                </td>
                <td className="px-6 py-4">
                    {joinAt}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    )
}