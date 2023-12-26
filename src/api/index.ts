import axios from "axios"

const getToken = async () => {
    const token = await localStorage.getItem("token")
    return token ? JSON.parse(token) : ''
}

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
})

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