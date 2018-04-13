import {client} from './index.js';

const url = '/questions';

export function fetchQuestions() {
    return dispatch => {
        dispatch({
            type: 'FETCH_QUESTIONS',
            payload: client.get(url)
        })
    }
}

export function newQuestion() {
    return dispatch => {
        dispatch({
            type: 'NEW_QUESTION'
        })
    }
}

export function saveQuestion(question) {
    return dispatch => {
        return dispatch({
            type: 'SAVE_QUESTION',
            payload: client.post(url, question)
        })
    }
}

export function fetchQuestion(id) {
    return dispatch => {
        return dispatch({
            type: 'FETCH_QUESTION',
            payload: client.get(`${url}/${id}`)
        })
    }
}

export function updateQuestion(question) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_QUESTION',
            payload: client.put(`${url}/${question.id}`, question)
        })
    }
}

export function deleteQuestion(id) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_QUESTION',
            payload: client.delete(`${url}/${id}`)
        })
    }
}
