import React, { useState } from "react";
import { NavbarComp } from "../../../components/public/NavbarComp";
import { getMapel, getTingkatPendidikan, postQuestion } from "../../../api";
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom";
import { LoadingComp } from "../../../components/LoadingComp";

export async function createQuestionLoader() {
    const mapel = await getMapel()
    const tingkatPendidikan = await getTingkatPendidikan()

    return defer({
        mapel,
        tingkatPendidikan
    })
}

export function CreateQuestion() {
    const [question, setQuestion] = useState('')
    const [mapel, setMapel] = useState('')
    const [tingkatPendidikan, setTingkatPendidikan] = useState('')
    const data = useLoaderData()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (ev: React.FormEvent<HTMLElement>) => {
        setIsLoading(true)
        ev.preventDefault()
        const result = await postQuestion(question, mapel, tingkatPendidikan)
        if(result.questionID) navigate(`/showQuestion/${result.questionID}`)
    }

    if(isLoading) return <LoadingComp />

    return (
        <main className="bg-primaryBg h-screen">
            <NavbarComp />
            <div className="bg-white mx-2 my-4 rounded-xl">
                <form className="mb-6 p-4" onSubmit={handleSubmit}>
                    <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900">Ajukan Pertanyaan</label>
                    <textarea onChange={ev => setQuestion(ev.target.value)} id="question" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tulis pertanyaanmu..."></textarea>
                    <React.Suspense
                        fallback={<LoadingComp />}
                    >
                        <Await
                            resolve={data}
                            errorElement={
                                <p>Data not found</p>
                            }
                        >
                            {(data) => (
                                <div className="mt-2 flex flex-col gap-2">
                                    <select onChange={ev => setMapel(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option selected>Semua Mapel</option>
                                        {
                                            data.mapel.map(({ categoryID, categoryName }: { categoryID: string, categoryName: string }) => (
                                                <option value={categoryID}>{categoryName}</option>
                                            ))
                                        }
                                    </select>
                                    <select onChange={ev => setTingkatPendidikan(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option selected>Semua Tingkat Pendidikan</option>
                                        {
                                            data.tingkatPendidikan.map(({ tagID, tagName }: { tagID: string, tagName: string }) => (
                                                <option value={tagID}>{tagName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )}
                        </Await>
                    </React.Suspense>
                    <button className="py-2 px-4 bg-slate-800 rounded-full text-white mt-4" type="submit">Ajukan</button>
                </form>
            </div>
        </main>
    )
}