import { client } from './index.js';

const url = '/answers';

export function newAnswer() {
    return dispatch => {
        dispatch({
            type: 'NEW_ANSWER'
        })
    }
}

export function saveAnswer(answer) {
    return dispatch => {
        return dispatch({
            type: 'SAVE_ANSWER',
            payload: client.post(`/questions/${answer.question_id}/${url}`, answer)
        })
    }
}

export function fetchAnswer(id) {
    return dispatch => {
        return dispatch({
            type: 'FETCH_ANSWER',
            payload: client.get(`${url}/${id}`)
        })
    }
}
