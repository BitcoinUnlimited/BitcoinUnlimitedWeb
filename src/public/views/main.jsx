'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Index from './pages/index.jsx';
import Download from './pages/download.jsx';
import Faq from './pages/faq.jsx';
import Buip from './pages/buip.jsx';
import Members from './pages/members.jsx';
import Resources from './pages/resources.jsx';
import Articles from './pages/articles.jsx';

ReactDOM.render((
    <Router history={createHistory()}>
        <Route path='/'>
            <IndexRoute component={Index} />
            <Route path='index' component={Index} />
            <Route path='download' component={Download} />
            <Route path='faq' component={Faq} />
            <Route path='buip' component={Buip} />
            <Route path='members' component={Members} />
            <Route path='resources' component={Resources} />
            <Route path='articles' component={Articles} />
        </Route>
    </Router>
), document.getElementById('react-app'));