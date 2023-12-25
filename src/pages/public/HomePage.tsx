import { CardComp } from "../../components/CardComp";
import { LeaderBoardComp } from "../../components/LeaderBoardComp";
import { PaginationComp } from "../../components/PaginationComp";
import { CategoryComp } from "../../components/CategoryComp";
import { NavLink } from "react-router-dom";

export function HomePage() {

    return (
        <div className="mx-4 mt-4 lg:flex">
            <CategoryComp />

            <div>
                <div className="flex flex-col w-full mt-4">
                    <CardComp />
                    <CardComp />
                    <CardComp />
                    <CardComp />
                </div>
                <PaginationComp />
            </div>

            <LeaderBoardComp />
            
        </div>
    )
}