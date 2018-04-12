import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionList from '../components/question-list';
import {fetchQuestions, deleteQuestion} from '../actions/question-actions';
import {Grid} from 'semantic-ui-react';

class QuestionListPage extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <Grid>
                <Grid.Column>
                    <h1 style={{marginTop: "1em", textAlign: "center"}}>Questions</h1>
                    <QuestionList questions={this.props.questions} deleteQuestion={this.props.deleteQuestion}/>
                </Grid.Column>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questionStore.questions
    }
}

export default connect(mapStateToProps, {fetchQuestions, deleteQuestion})(QuestionListPage);
