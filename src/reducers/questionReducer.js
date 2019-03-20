import { SET_QUESTIONS, SET_CURRENT_QUESTION, REMOVE_SHOWN_QUESTION, ADD_SHOWN_QUESTION } from "../constants/actions";

const initialState = {
    allQuestions: [],
    currentQuestion: null,
    shownQuestions: [],
};

const reducer = (state=initialState, action) => {
    if (action.type === SET_QUESTIONS) {
        return {
            ...state,
            allQuestions: action.payload,
        };
    }

    if (action.type === SET_CURRENT_QUESTION) {
        return {
            ...state,
            currentQuestion: action.payload,
        };
    }

    if (action.type === ADD_SHOWN_QUESTION) {
        return {
            ...state,
            shownQuestions: [...state.shownQuestions, action.payload],
        };
    }

    if (action.type === REMOVE_SHOWN_QUESTION)
        return {
            ...state,
            shownQuestions: state.shownQuestions.filter(questionId => questionId !== action.payload),
        };
    return state;
};

export default reducer;
