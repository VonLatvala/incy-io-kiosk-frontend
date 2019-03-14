import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

// we mock the service so that we can return custom data
jest.mock("../src/service", () => {
    const mockQuestions = [
        {
            position: 2,
        },
        {
            position: 3,
        },
        {
            position: 4,
        },
        {
            position: 1,
        }
    ];
    const mockGetQuestions = jest.fn();
    mockGetQuestions.mockReturnValue(mockQuestions);
    return {
        getQuestions: mockGetQuestions
    };
});

describe('<App />', () => {
    it('should call setQuestions, setCategory and setPlace on componentDidMount()', () => {
        const setQuestions = jest.fn();
        const setCategory = jest.fn();
        const setPlace = jest.fn();
        shallow(
            <App
                currentLanguageId="en"
                answers={{}}
                addAnswer={jest.fn()}
                resetAnswers={jest.fn()}
                setQuestions={setQuestions}
                setCurrentQuestion={jest.fn()}
                setAvailableChoices={jest.fn()}
                questions={{ allQuestions: [] }}
                context={{ place: [], category: [] }}
                setPlace={setPlace}
                setCategory={setCategory}
                setAllAnswered={jest.fn()}
                setAllDisplayed={jest.fn()}
                flags={{
                    isAllQuestionsAnswered: false,
                    isAllQuestionsDisplayed: false,
                    error: {  showError: false, messageId: "" }
                }}
                setShowError={jest.fn()}
                setErrorMsg={jest.fn()}
                choices={{ availableChoices: [] }}
                resetText={jest.fn()}
            />
        );
        expect(setQuestions.mock.toBeCalled)
        expect(setCategory.mock.toBeCalled)
        expect(setPlace.mock.toBeCalled)
    });

    it('should set the question on position 1 as the current question.', () =>{
        const setQuestions = jest.fn();
        const setCategory = jest.fn();
        const setPlace = jest.fn();
        shallow(
            <App
                currentLanguageId="en"
                answers={{}}
                addAnswer={jest.fn()}
                resetAnswers={jest.fn()}
                setQuestions={setQuestions}
                setCurrentQuestion={jest.fn()}
                setAvailableChoices={jest.fn()}
                questions={{ allQuestions: [], currentQuestion: {} }}
                context={{ place: [], category: [] }}
                setPlace={setPlace}
                setCategory={setCategory}
                setAllAnswered={jest.fn()}
                setAllDisplayed={jest.fn()}
                flags={{
                    isAllQuestionsAnswered: false,
                    isAllQuestionsDisplayed: false,
                    error: {  showError: false, messageId: "" }
                }}
                setShowError={jest.fn()}
                setErrorMsg={jest.fn()}
                choices={{ availableChoices: [] }}
                resetText={jest.fn()}
            />
        );
        expect(questions.currentQuestion).toEqual({position: 1})
    });
    })
})