const defaultState = {
    answers: [],
    answer: {},
    loading: false,
    errors: {}
};

export default (state=defaultState, action={}) => {
    switch (action.type) {
        // Index
        case 'FETCH_ANSWERS':
            return {
                ...state,
                answers: action.payload
            };

        case "FETCH_ANSWERS_FULFILLED":
            return {
                ...state,
                answers: action.payload.data.data || action.payload.data
            };

        // New
        case 'NEW_ANSWER': {
            return {
                ...state,
                answer: {}
            }
        }

        case 'SAVE_ANSWER_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'SAVE_ANSWER_FULFILLED': {
            return {
                ...state,
                answer: action.payload.data,
                errors: {},
                loading: false
            }
        }

        case 'SAVE_ANSWER_REJECTED': {
            const data = action.payload.response.data;
            const { question, answer } = data.errors;
            const errors = { global: data.message, question, answer };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case 'FETCH_ANSWER_PENDING': {
            return {
                ...state,
                loading: true,
                answer: {}
            }
        }

        case 'FETCH_ANSWER_FULFILLED': {
            return {
                ...state,
                answer: action.payload.data,
                errors: {},
                loading: false
            }
        }

        default:
            return state;
    }
}
