import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Register from './pages/Register';
import EditCamping from './pages/EditCamping';
import Camping from './pages/Camping';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/register" component={Register} />
                <Route path="/edit-camping/:id" component={EditCamping} />
                <Route path="/camping/:id" component={Camping} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
