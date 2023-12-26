import { CardComp } from "../../components/public/CardComp";
import { LeaderBoardComp } from "../../components/public/LeaderBoardComp";
import { PaginationComp } from "../../components/PaginationComp";
import { CategoryComp } from "../../components/public/CategoryComp";
import { Await, NavLink, defer, useLoaderData } from "react-router-dom";
import plusIcon from "../../assets/plus-icons.svg"
import { getAllQuestions } from "../../api";
import React from "react";
import { LoadingComp } from "../../components/LoadingComp";

export async function homePageLoader() {
    const question = await getAllQuestions()
    
    return defer({
        question
    })
}

export function HomePage() {
    const data: any = useLoaderData()

    return (
        <main className="mx-4 mt-4 lg:flex">
            <CategoryComp />

            <div className="fixed lg:hidden top-1/2 right-2 transform -translate-y-1/2 w-10 h-10">
                <NavLink to={"/createQuestion"}>
                    <img src={plusIcon} alt="Plus Icon" className="w-full h-full" />
                </NavLink>
            </div>

            <div>
                <div className="flex flex-col w-full mt-4">
                    <div className="hidden p-5 lg:flex justify-between w-max h-max bg-white rounded-lg mb-4">
                            <p className="text-xl font-bold self-center">Bingung dengan sesuatu?</p>
                            <div className="ms-64">
                                <NavLink to={"/createQuestion"} className="p-4 bg-slate-800 text-white rounded-full">Ayo buat pertanyan</NavLink>
                            </div>
                    </div>

                    <React.Suspense
                        fallback={<LoadingComp />}
                    >
                        <Await
                            resolve={data.question}
                            errorElement={
                                <>Error loading data</>
                            }
                        >
                            {
                                (question) => (
                                    question.map(({questionID, questionText, categoryID}: { questionID: string, questionText: string, categoryID: any}) => (
                                        <CardComp key={questionID} 
                                            mapel={categoryID.categoryName}
                                            questionID={questionID}
                                            questionText={questionText}
                                        />
                                    ))
                                )
                            }
                        </Await>
                    </React.Suspense>
                </div>
                <PaginationComp />
            </div>

            <LeaderBoardComp />

        </main>
    )
}