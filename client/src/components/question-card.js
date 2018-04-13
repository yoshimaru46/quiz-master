import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';

import remark from 'remark'
import reactRenderer from 'remark-react'

export default function QuestionCard({question}) {
    return (
        <Card style={{width: "100%"}}>
            <Card.Content>
                <Card.Header>
                    {remark().use(reactRenderer).processSync(question.content).contents}
                </Card.Header>
            </Card.Content>
        </Card>
    )
}

QuestionCard.propTypes = {
    question: PropTypes.object.isRequired
};
