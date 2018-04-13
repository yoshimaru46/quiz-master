import AnswerCard from "../components/answer-card";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAnswer} from '../actions/answer-actions';
import {Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class AnswerPage extends Component {
    componentDidMount = () => {
        const {id} = this.props.match.params;
        this.props.fetchAnswer(id)
    };

    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <h1 style={{marginTop: "1em", textAlign: "center"}}>Result</h1>
                    <AnswerCard
                        question={this.props.question}
                        answer={this.props.answer}
                    />
                    <div style={{textAlign: "center"}}>
                        <Link to='/answers/new' className="ui button green massive">Next Question</Link>
                    </div>
                </Grid.Column>
            </Grid>
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

export default connect(mapStateToProps, {fetchAnswer})(AnswerPage);
