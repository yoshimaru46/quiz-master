import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import QuestionListPage from './pages/question-list-page';
import QuestionFormPage from './pages/question-form-page';
import AnswerFormPage from './pages/answer-form-page';
import AnswerPage from './pages/answer-page';

class App extends Component {

    render() {
        return (
            <Container>
                <div className="ui three item menu">
                    <NavLink className="item" activeClassName="active" exact to="/">
                        Questions List
                    </NavLink>
                    <NavLink className="item" activeClassName="active" exact to="/questions/new">
                        Add Question
                    </NavLink>
                    <NavLink className="item" activeClassName="active" exact to="/answers/new">
                        Start Answer
                    </NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={QuestionListPage}/>
                    <Route exact path="/questions" component={QuestionListPage}/>
                    <Route path="/questions/new" component={QuestionFormPage}/>
                    <Route path="/questions/edit/:id" component={QuestionFormPage}/>
                    <Route path="/answers/new" component={AnswerFormPage}/>
                    <Route path="/answers/:id" component={AnswerPage}/>
                </Switch>
            </Container>
        );
    }
}

export default App;
