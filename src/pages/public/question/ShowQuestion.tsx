import { Await, NavLink, defer, useLoaderData, useParams } from "react-router-dom";
import { NavbarComp } from "../../../components/public/NavbarComp";
import { getMapel, getOneQuestion, getSatuMapel, getSatuTingkatPendidikan, getTingkatPendidikan } from "../../../api";
import React from "react";
import { LoadingComp } from "../../../components/LoadingComp";

export async function showQuestionLoader({ params }: any) {
    const question = await getOneQuestion(params.questionID)
    const mapelQuestion = await getSatuMapel(question.categoryID.categoryID)
    const tingkatPendidikanQuestion = await getSatuTingkatPendidikan(question.tagID.tagID)
    const mapel = await getMapel()
    const tingkatPendidikan = await getTingkatPendidikan()

    return defer({
        question: question,
        mapelID: mapelQuestion.categoryID,
        tingkatPendidikanID: tingkatPendidikanQuestion.tagID,
        mapel: mapel,
        tingkatPendidikan: tingkatPendidikan
    })
}

export function ShowQuestion() {
    const data: any = useLoaderData()

    return (
        <main className="bg-primaryBg h-screen">
            <NavbarComp />
            <React.Suspense
                fallback={<LoadingComp />}
            >
                <Await
                    resolve={data}
                    errorElement={
                        <p>error loading data</p>
                    }
                >
                    {
                        (data) => (
                            <div className="flex flex-col h-max lg:mx-40 mx-2 mt-2 bg-white rounded-lg mb-4">
                                <NavLink to={"/"} className="mx-2 my-2">
                                    {
                                        data.question.questionText
                                    }
                                </NavLink>
                                <div className="m-2 flex flex-col gap-2">
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            data.mapel.map(({ categoryID, categoryName }: { categoryID: string, categoryName: string }) => (
                                                data.mapelID === categoryID ?
                                                    <option value={categoryID} selected>{categoryName}</option> :
                                                    <option value={categoryID}>{categoryName}</option>
                                            ))
                                        }
                                    </select>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            data.tingkatPendidikan.map(({ tagID, tagName }: { tagID: string, tagName: string }) => (
                                                data.tingkatPendidikanID === tagID ? 
                                                    <option value={tagID} selected>{tagName}</option> :
                                                    <option value={tagID}>{tagName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex justify-between mx-2 my-4">
                                    <div className="self-end me-2 mb-2">
                                        <NavLink to={`/editQuestion/${data.question.questionID}`} className="bg-slate-800 rounded-lg w-max p-2 text-white">Edit</NavLink>
                                    </div>
                                    <div className="self-end me-2 mb-2">
                                        <NavLink to={`/home`} className="bg-cyan-400 rounded-lg w-max p-2 text-white">selesai</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Await>
            </React.Suspense>
        </main>
    )
}