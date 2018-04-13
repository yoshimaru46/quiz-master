import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {fetchQuestion} from '../actions/question-actions';
import {newAnswer, saveAnswer, fetchAnswer} from '../actions/answer-actions';
import AnswerForm from '../components/answer-form';
import QuestionCard from '../components/question-card';
import {Grid, Button} from 'semantic-ui-react';


class AnswerFormPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        };
    }

    componentDidMount = () => {
        this.props.fetchQuestion('sample')
        this.props.newAnswer();
    };

    submit = (answer) => {
        if (!answer.id) {
            return this.props.saveAnswer(answer)
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
                        <Redirect to={`/answers/${this.props.answer.id}`}/> :
                        <Grid centered columns={2}>
                            <Grid.Column>
                                <h1 style={{marginTop: "1em", textAlign: "center"}}>
                                    Question No.{this.props.question.id}</h1>
                                <Button basic color="green" onClick={() => window.location.reload()}>Refresh</Button>
                                <QuestionCard
                                    key={this.props.question.id}
                                    question={this.props.question}
                                />
                                <AnswerForm
                                    loading={this.props.loading}
                                    onSubmit={this.submit}
                                    initialValues={{question_id: `${this.props.question.id}`}}
                                    enableReinitialize={true}
                                />
                            </Grid.Column>
                        </Grid>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        question: state.questionStore.question,
        answer: state.answerStore.answer,
        errors: state.questionStore.errors
    }
}

export default connect(mapStateToProps, {newAnswer, saveAnswer, fetchAnswer, fetchQuestion})(AnswerFormPage);
