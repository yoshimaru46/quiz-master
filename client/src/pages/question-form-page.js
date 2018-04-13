import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {newQuestion, saveQuestion, fetchQuestion, updateQuestion} from '../actions/question-actions';
import QuestionForm from '../components/question-form';


class QuestionFormPage extends Component {

    state = {
        redirect: false
    };

    componentDidMount = () => {
        const {id} = this.props.match.params;
        if (id) {
            this.props.fetchQuestion(id)
        } else {
            this.props.newQuestion();
        }
    };

    submit = (question) => {
        if (!question.id) {
            return this.props.saveQuestion(question)
                .then(response => this.setState({redirect: true}))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        } else {
            return this.props.updateQuestion(question)
                .then(response => this.setState({redirect: true}))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        }
    };

    render() {
        return (
            <div>
                {
                    this.state.redirect ?
                        <Redirect to="/"/> :
                        <QuestionForm question={this.props.question} loading={this.props.loading}
                                      onSubmit={this.submit}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        question: state.questionStore.question,
        errors: state.questionStore.errors
    }
}

export default connect(mapStateToProps, {newQuestion, saveQuestion, fetchQuestion, updateQuestion})(QuestionFormPage);
