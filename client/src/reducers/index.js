import AnswerReducer from './answer-reducer';
import QuestionReducer from './question-reducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    answerStore: AnswerReducer,
    questionStore: QuestionReducer,
    form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
