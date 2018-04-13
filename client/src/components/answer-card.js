import React from 'react';
import PropTypes from 'prop-types';
import {Card, Icon, Message} from 'semantic-ui-react';

import remark from 'remark'
import reactRenderer from 'remark-react'

export default function AnswerCard({question, answer}) {
    return (
        <Card style={{width: "100%"}}>
            <Card.Content>
                <Card.Header>
                    <h2>Question Content</h2>
                    {remark().use(reactRenderer).processSync(question.content).contents}
                </Card.Header>
                <hr/>
                <Card.Description>
                    <Message color='blue'>Your Answer</Message>
                    <h3>{answer.content}</h3>
                    <hr/>
                    <Message color='green'>Correct Answer</Message>
                    <h3>{question.answer_content}</h3>
                    <hr/>
                    <Message color='violet'>Result</Message>
                    <div style={{textAlign: "center"}}>
                        {answer.correct ? <Icon size='massive' color='blue' name='circle outline'/> : <Icon size='massive' color='pink' name='close'/>}
                    </div>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

AnswerCard.propTypes = {
    answer: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired
};
