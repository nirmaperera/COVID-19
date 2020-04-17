import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './App.js';
import Landing from './components/Landing/landing.jsx';
import Resources from './components/Resources/resources';



const Router = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route exact path="/resources" component={Resources} />
                <Route exact path="/tracker" component={App} />
            </Switch>
        </BrowserRouter>
    </div>

);

export default Router;
