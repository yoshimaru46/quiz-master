const defaultState = {
    questions: [],
    question: {},
    loading: false,
    errors: {}
};

export default (state=defaultState, action={}) => {
    switch (action.type) {
        // Index
        case 'FETCH_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            };

        case "FETCH_QUESTIONS_FULFILLED":
            return {
                ...state,
                questions: action.payload.data.data || action.payload.data
            };

        // New
        case 'NEW_QUESTION': {
            return {
                ...state,
                question: {}
            }
        }

        case 'SAVE_QUESTION_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'SAVE_QUESTION_FULFILLED': {
            return {
                ...state,
                questions: [...state.questions, action.payload.data],
                errors: {},
                loading: false
            }
        }

        case 'SAVE_QUESTION_REJECTED': {
            const data = action.payload.response.data;
            const { question, answer } = data.errors;
            const errors = { global: data.message, question, answer };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        case 'FETCH_QUESTION_PENDING': {
            return {
                ...state,
                loading: true,
                question: {}
            }
        }

        // Edit
        case 'FETCH_QUESTION_FULFILLED': {
            return {
                ...state,
                question: action.payload.data,
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_QUESTION_PENDING': {
            return {
                ...state,
                loading: true
            }
        }

        case 'UPDATE_QUESTION_FULFILLED': {
            const question = action.payload.data;
            return {
                ...state,
                questions: state.questions.map(item => item._id === question.id ? question : item),
                errors: {},
                loading: false
            }
        }

        case 'UPDATE_QUESTION_REJECTED': {
            const data = action.payload.response.data;
            const { question, answer } = data.errors;
            const errors = { global: data.message, question, answer };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }

        // Delete
        case 'DELETE_QUESTION_FULFILLED': {
            const id = action.payload.data.id;
            return {
                ...state,
                questions: state.questions.filter(item => item.id !== id)
            }
        }

        default:
            return state;
    }
}
