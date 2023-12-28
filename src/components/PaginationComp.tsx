export function PaginationComp({ setPage, hasNextPage, hasPreviousPage, pageCount }: { setPage: any, hasNextPage: boolean, hasPreviousPage: boolean, pageCount: number }) {
    return (
        <nav className="mb-4">
            <ul className="inline-flex -space-x-px text-base h-10">
                {
                    hasPreviousPage &&
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                    </li>
                }
                {[...Array(pageCount)].map((_, index) => (
                    <li key={index}>
                        <button onClick={() => setPage(`${index + 1}`)} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                            {index + 1}
                        </button>
                    </li>
                ))}
                {
                    hasNextPage &&
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                    </li>
                }
            </ul>
        </nav>
    )
}