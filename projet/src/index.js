import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Formulaire from './Formulaire';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound'; 

const Root = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/Formulaire' component={Formulaire}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

render(
    <Root />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
