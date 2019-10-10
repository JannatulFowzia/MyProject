//Handles routing between our two pages (login and mainpage)

import React, { Component } from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './MainPage';

class ProjectApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/" exact component={MainPage} /> 
                    </Switch>
                </>
            </Router>
        )
    }
}

export default ProjectApp