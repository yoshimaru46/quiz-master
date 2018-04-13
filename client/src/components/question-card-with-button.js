import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';

import remark from 'remark'
import reactRenderer from 'remark-react'

export default function QuestionCardWithButton({question, deleteQuestion}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {remark().use(reactRenderer).processSync(question.content).contents}
                </Card.Header>
                <Card.Description>
                    <Icon name='lightbulb'/>
                    {question.answer_content}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/questions/edit/${question.id}`} className="ui basic button green">Edit</Link>
                    <Button basic color="red" onClick={() => { if (window.confirm('Are you sure?')) deleteQuestion(question.id) }} >Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

QuestionCardWithButton.propTypes = {
    question: PropTypes.object.isRequired
};
