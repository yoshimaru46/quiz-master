import React, {Component} from 'react';
import {Form, Grid, Card, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import classnames from 'classnames';

import remark from 'remark'
import reactRenderer from 'remark-react'

class QuestionForm extends Component {
    componentWillReceiveProps = (nextProps) => {
        const {question} = nextProps;
        if (question.id !== this.props.question.id) {
            this.props.initialize(question)
        }
    };

    renderField = ({input, label, type, meta: {touched, error}}) => (
        <Form.Field className={classnames({error: touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    );

    renderTextAreaField = ({input, label, type, meta: {touched, error}}) => (
        <Form.Field className={classnames({error: touched && error})}>
            <label>{label}</label>
            <textarea {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
            <div id='preview' style={{marginTop: "1em"}}>
                <p>Contennt Preview</p>
                <Card style={{width: "100%"}}>
                    <Card.Content>
                        <Card.Header>
                            {remark().use(reactRenderer).processSync(input.value).contents}
                        </Card.Header>
                    </Card.Content>
                </Card>
            </div>
        </Form.Field>
    );

    render() {
        const {handleSubmit, pristine, submitting, loading} = this.props;
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <h1 style={{marginTop: "1em", textAlign: "center"}}>
                        {this.props.question.id ? 'Edit Question' : 'Add New Question'}
                    </h1>
                    <Form onSubmit={handleSubmit} loading={loading}>
                        <Field name="content" type="text" component={this.renderTextAreaField} label="Content"/>
                        <Field name="answer_content" type="text" component={this.renderField} label="Answer"/>
                        <div style={{textAlign: "center"}}>
                            <Button primary size='massive' type='submit' disabled={pristine || submitting}>Save</Button>
                        </div>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.content) {
        errors.content = {
            message: 'You need to provide Content'
        }
    }
    if (!values.answer_content) {
        errors.answer_content = {
            message: 'You need to provide a Answer'
        }
    }
    return errors;
};

export default reduxForm({form: 'question', validate})(QuestionForm);
