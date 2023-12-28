import { Await, defer, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getAllTags, getAllCategory, getOneQuestion, updateQuestion } from "../../../api";
import { NavbarComp } from "../../../components/public/NavbarComp";
import React, { useEffect, useState } from "react";
import { LoadingComp } from "../../../components/LoadingComp";

export async function editQuestionLoader({ params }: any) {
    const question = await getOneQuestion(params.questionID)
    const mapel = await getAllCategory('')
    const tingkatPendidikan = await getAllTags('')
    
    return defer({
        question,
        mapel,
        tingkatPendidikan
    })
}

export function EditQuestion() {
    const data: any = useLoaderData()
    const [question, setQuestion] = useState('')
    const [mapel, setMapel] = useState('')
    const [tingkatPendidikan, setTingkatPendidikan] = useState('')
    const { questionID } = useParams()
    const navigate = useNavigate()

    useEffect(() => setQuestion(data.question.questionText), [mapel, tingkatPendidikan])

    const handleSubmit = async (ev: React.FormEvent<HTMLElement>) => {
        ev.preventDefault()
        const result = await updateQuestion(questionID, question, mapel, tingkatPendidikan)
        
        if(result.isActive) navigate(`/showQuestion/${questionID}`)
    }

    return (
        <main className="bg-primaryBg h-screen">
            <NavbarComp />
            <div className="bg-white mx-2 my-4 rounded-xl">
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
                            <form className="mb-6 p-4" onSubmit={handleSubmit}>
                                <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900">Edit Pertanyaan</label>
                                <textarea value={question} onChange={ev => setQuestion(ev.target.value)} id="question" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tulis pertanyaanmu..."></textarea>
                                <div className="mt-2 flex flex-col gap-2">
                                    <select onChange={ev => setMapel(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            data.mapel.map(({ categoryID, categoryName }: { categoryID: string, categoryName: string }) => (
                                                categoryID === data.question.categoryID.categoryID ?
                                                    setMapel(categoryID) + '' && <option value={categoryID} selected key={categoryID}>{categoryName}</option>:
                                                    <option value={categoryID} key={categoryID}>{categoryName}</option>
                                            ))
                                        }
                                    </select>
                                    <select onChange={ev => setTingkatPendidikan(ev.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {
                                            data.tingkatPendidikan.map(({ tagID, tagName }: { tagID: string, tagName: string }) => (
                                                tagID === data.question.tagID.tagID ?
                                                    setTingkatPendidikan(tagID) + '' && <option value={tagID} selected key={tagID}>{tagName}</option> :
                                                    <option value={tagID} key={tagID}>{tagName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <button className="py-2 px-4 bg-slate-800 rounded-full text-white mt-4" type="submit">Ajukan</button>
                            </form>
                        )}
                    </Await>
                </React.Suspense>
            </div>
        </main>
    )
}