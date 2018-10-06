'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router'

import Index from './pages/index.jsx';
import Solutions from './pages/solutions.jsx';
import Technologies from './pages/technologies.jsx';
import About from './pages/about.jsx';
import Donate from './pages/donate.jsx';
import Resources from './pages/resources.jsx';
import Faq from './pages/faq.jsx';
import Download from './pages/download.jsx';
import EmergentConsensusBU from './pages/emergent-consensus-bu.jsx';
import EmergentConsensus from './pages/emergent-consensus.jsx';
import DevelopTestingAccord from './pages/develop-testing-accord.jsx';
import Login from './pages/login.jsx';
import BlogList from './pages/blog-list.jsx';
import ContentDisplay from './pages/content-display.jsx';
import NotFound from './pages/not-found.jsx';

import Auth from './pages/protected/auth.jsx';
import Dashboard from './pages/protected/dashboard.jsx';
import RealmFormWrapper from './pages/protected/realm-form-wrapper.jsx';

ReactDOM.render((
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path='/'>
            <IndexRoute component={Index} />
            <Route path='index' component={Index} />
            <Route path="solutions(/:section)" component={Solutions} />
            <Route path='technologies(/:section)' component={Technologies} />
            <Route path='about(/:section)' component={About} />
            <Route path='donate' component={Donate} />
            <Route path='resources(/:section)' component={Resources} />
            <Route path='faq(/:section)' component={Faq} />
            <Route path='download(/:section)' component={Download} />
            <Route path='emergent-consensusBU' component={EmergentConsensusBU} />
            <Route path='emergent-consensus' component={EmergentConsensus} />
            <Route path='cash-development-plan' component={DevelopTestingAccord} />
            <Route path='login' component={Login} />
            <Route component={Auth}>
                <Route path='dashboard' component={Dashboard} />
                <Route path='create/:realmType' component={RealmFormWrapper} />
                <Route path='update/:realmType/:uid' component={RealmFormWrapper} />
            </Route>
            <Route path='blog' component={BlogList} />
            <Route path='content/:realmType/:uid' component={ContentDisplay} />
            <Route path='not-found' component={NotFound} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('react-app'));
