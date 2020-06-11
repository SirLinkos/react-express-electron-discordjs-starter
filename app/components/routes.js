import React from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Main from './main';
import Home from '../views/home';

const Routes = (
    <HashRouter>
        <Route path="/" component={Main}>
            <Route component={Home} />
        </Route>
    </HashRouter>
);

export default Routes;
