import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import classnames from 'classnames';

class AnswerForm extends Component {
    renderField = ({input, label, type, meta: {touched, error}}) => (
        <Form.Field className={classnames({error: touched && error})}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    );

    renderHiddenField = ({input, type, meta: {touched, error}}) => (
        <Form.Field className={classnames({error: touched && error})}>
            <input {...input} type={type} disabled="disabled"/>
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    );

    render() {
        const {handleSubmit, pristine, submitting, loading} = this.props;
        return (
            <Form onSubmit={handleSubmit} loading={loading}>
                <Field
                    name="content"
                    type="text"
                    component={this.renderField}
                    label="Answer"
                />
                <Field
                    name="question_id"
                    type="hidden"
                    component={this.renderHiddenField}
                />
                <div style={{textAlign: "center"}}>
                    <Button primary size='massive' type='submit' disabled={pristine || submitting}>Submit</Button>
                </div>

            </Form>
        )
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.question_id) {
        errors.question_id = {
            message: 'You need to provide Question.id'
        }
    }
    if (!values.content) {
        errors.content = {
            message: 'You need to provide Content'
        }
    }
    return errors;
};

export default reduxForm({form: 'answer', validate})(AnswerForm);
