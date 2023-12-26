import axios from "axios"
import { error } from "console"

const getToken = async () => {
    const token = await localStorage.getItem("token")
    return token ? JSON.parse(token) : ''
}

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
})

// get all answers for admin
export const getAllAnswerForAdmin = async () => {
    const token = await getToken()
    return axiosInstance
            .get('/answers', { headers: { 'Authorization': `Bearer ${token}`}})
            .then(response => response.data)
            .catch(error => error)
}

// get all questions for admin
export const getAllQuestionsForAdmin = async () => {
    const token = await getToken()
    return axiosInstance
        .get('/questions/admin', { headers: { 'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .catch(error => error)
}

// get all users for admin page
export const getAllUser = async (searchValue: string | null = null) => {
    const token = await getToken()
    return axiosInstance
        .get(`/users/admin/all${
            searchValue ? 
                searchValue.includes('@gmail.com') && '?email=' + searchValue ||
                searchValue && '?username=' + searchValue
                : ''
        }`, { headers: { 'Authorization': `Bearer ${token}`}})
        .then(response => response.data)
        .catch(error => error)
}

// get one question from user
export const getQuestionByUser = (userID: string) => 
    axiosInstance
        .get(`questions/${userID}/user`)
        .then(response => response.data)
        .catch(error => error)

// get one user
export const getOneUser = (userID: string) =>
    axiosInstance
        .get(`/users/${userID}`)
        .then(response => response.data)
        .catch(error => error)

// get all questions
export const getAllQuestions = () =>
    axiosInstance
        .get(`/questions`)
        .then(response => response.data)
        .catch(error => error)

// edit question
export const updateQuestion = async (questionID: string | undefined, questionText: string, category: string, tag: string) => {
    const token = await getToken()
    return axiosInstance
            .patch(`questions/${questionID}/update`, { questionText, category, tag }, {
                headers: { 'Authorization': `Bearer ${token}`}
            })
            .then(response => response.data)
            .catch(error => error)
}

// get one tag
export const getSatuTingkatPendidikan = (tagID: string) =>
    axiosInstance
        .get(`tags/${tagID}`)
        .then(response => response.data)
        .catch(error => error)

// get one category
export const getSatuMapel = (mapelID: string) => 
    axiosInstance
        .get(`/category/${mapelID}`)
        .then(response => response.data)
        .catch(error => error)

// get one question
export const getOneQuestion = (questionID: string) =>
    axiosInstance
        .get(`/questions/${questionID}`)
        .then(response => response.data)
        .catch(error => error)

// create question
export const postQuestion = async (questionText: string, categoryID: string, tagID: string) => {
    const token = await getToken()
    return axiosInstance
            .post('/questions/create', { questionText, categoryID, tagID }, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(response => response.data)
            .catch(error => error)
}

// get all category
export const getMapel = () =>
    axiosInstance
        .get(`/category`) 
        .then(response => response.data)
        .catch(error => error)

// get all tag
export const getTingkatPendidikan = () =>
    axiosInstance
        .get('/tags')
        .then(response => response.data)
        .catch(error => error)