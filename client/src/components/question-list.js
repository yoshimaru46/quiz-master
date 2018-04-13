import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';
import QuestionCardWithButton from './question-card-with-button';

export default function QuestionList({questions, deleteQuestion}) {
    const cards = () => {
        return questions.map(question => {
            return (
                <QuestionCardWithButton
                    key={question.id}
                    question={question}
                    deleteQuestion={deleteQuestion}
                />
            )
        })
    };

    return (
        <Card.Group>
            {cards()}
        </Card.Group>
    )
}

QuestionList.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            answer_content: PropTypes.string.isRequired,
        })
    ),

    deleteQuestion: PropTypes.func.isRequired,
};
