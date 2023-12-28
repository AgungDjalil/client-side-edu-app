import axios from "axios"

const getToken = async () => {
    const token = await localStorage.getItem("token")
    return token ? JSON.parse(token) : ''
}

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
})

// belum berhasil
// get all user report for admin
export const getAllUserReportForAdmin = async () => {
    const token = await getToken()
    return axiosInstance
        .get('/reports/users', { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// belum berhasil
// delete question
export const deleteQuestion = async (questionID: string) => {
    const token = await getToken()
    return axiosInstance
            .delete(`questions/:questionID/delete/:reportID`, { headers: { 'Authorization': `Bearer ${token}` }})
            .then(response => response.data)
            .catch(error => error)
}

// ada 30 api tersambung di bawah

// delete user
export const deleteUser = async (userID: string) => {
    const token = await getToken()
    return axiosInstance
        .delete(`users/${userID}/delete`, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => console.log((response.data)))
        .catch(error => error)
}

// get all users for admin page
export const getAllUser = async (searchValue: string | null = null, type: string | undefined) => {
    const token = await getToken()
    return type === 'all' ?
        axiosInstance
            .get(`users/admin/all${searchValue ?
                    `?page=${searchValue}`
                    : ''
                }`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => response.data)
            .catch(error => error) :
        axiosInstance
            .get(`/users${searchValue ?
                searchValue.includes('@gmail.com') && '?email=' + searchValue ||
                searchValue && '?username=' + searchValue
                : ''
                }`)
            .then(response => response.data)
            .catch(error => error)
}

// delete category
export const deleteCategory = async (categoryID: string) => {
    const token = await getToken()
    return axiosInstance
        .delete(`category/${categoryID}/delete`, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// create category
export const createCategory = async (categoryName: string | undefined) => {
    const token = await getToken()
    return axiosInstance
        .post('category/user/create', { categoryName }, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => response.data)
        .catch(error => error)
}

// get all category
export const getAllCategory = async (type: string) => {
    const token = await getToken()
    return type === 'moderator' ?
        axiosInstance
            .get(`/category/all`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => response.data)
            .catch(error => error) :
        axiosInstance
            .get('category')
            .then(response => response.data)
            .catch(error => error)
}

// create tag
export const createTag = async (tagName: string) => {
    const token = await getToken()
    return axiosInstance
        .post('tags/create', { tagName }, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// get all tags moderator and user
export const getAllTags = async (type: string | undefined) => {
    const token = await getToken()
    return type === "moderator" ?
        axiosInstance
            .get(`tags/all`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => response.data)
            .catch(error => error) :
        axiosInstance
            .get('/tags')
            .then(response => response.data)
            .catch(error => error)
}

// delete tag
export const deleteTag = async (tagID: string | undefined) => {
    const token = await getToken()
    return axiosInstance
        .post(`tags/${tagID}/delete`, {}, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// edit answer
export const editAnswer = async (answerID: string | undefined, answerText: string | undefined) => {
    const token = await getToken()
    return axiosInstance
        .patch(`answer/${answerID}/edit`, { answerText }, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => response.data)
        .catch(error => error)
}

// get one answer
export const getOneAnswer = async (answerID: string | undefined) => {
    const token = await getToken()
    return axiosInstance
        .get(`/answers/${answerID}`, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// get all answer bases on user
export const getAllAnswerBasesUser = async (userID: string) => {
    const token = await getToken()
    return axiosInstance
        .get(`answer/${userID}`, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// create comment for answer
export const createCommentForAnswer = async (answerID: string, commentText: string | undefined) => {
    const token = await getToken()
    return axiosInstance
        .post(`comments/user/create/${answerID}/answer`, { commentText }, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => response.data)
        .catch(error => error)
}

// get all comment for answer
export const getAllAnswerComment = async (answerID: string) =>
    axiosInstance
        .get(`comments/answer/${answerID}`)
        .then(response => response.data)
        .catch(error => error)

// create comment for question
export const createCommentForQuestion = async (questionID: string | undefined, commentText: string | undefined) => {
    const token = await getToken()
    return axiosInstance
        .post(`comments/user/create/${questionID}/question`, { commentText }, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => response.data)
        .catch(error => error)
}

// get all comment for question
export const getAllQuestionComments = (questionID: string) =>
    axiosInstance
        .get(`comments/question/${questionID}`)
        .then(response => response.data)
        .catch(error => error)

// get all answer based on question 
export const getAllAnswerBasesQuestion = async (questionID: string) =>
    axiosInstance
        .get(`questions/${questionID}/answer`)
        .then(response => response.data)
        .catch(error => error)

// create answer 
export const createAnswer = async (questionID: string, answerText: string) => {
    const token = await getToken()
    return axiosInstance
        .post(`answer/user/create/${questionID}`, { answerText }, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// get all answers for admin
export const getAllAnswerForAdmin = async () => {
    const token = await getToken()
    return axiosInstance
        .get('/answers', { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => response.data)
        .catch(error => error)
}

// get all questions for admin
export const getAllQuestionsForAdmin = async () => {
    const token = await getToken()
    return axiosInstance
        .get('/questions/admin', { headers: { 'Authorization': `Bearer ${token}` } })
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
            headers: { 'Authorization': `Bearer ${token}` }
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