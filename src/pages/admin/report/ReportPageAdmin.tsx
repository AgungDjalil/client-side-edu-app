import { useEffect, useState } from "react";
import { TableComp } from "../../../components/admin/TableComp";
import { getAllUserReportForAdmin } from "../../../api";
import { LoadingComp } from "../../../components/LoadingComp";

export function ReportPageAdmin() {
    const [dataReport, setDataReport] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getAllUserReportForAdmin()
            setDataReport(data)
        }
        getData()
    }, [])

    if(!dataReport) return <LoadingComp />
    
    return (
        <main className="p-4 ml-64">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <TableComp
                    attributs={[]}
                    colName={[]}
                    data={dataReport}
                />
            </div>
        </main>
    )
}