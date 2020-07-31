import React from 'react';
import { BrowserRouter as Router,
Route,
Switch,
Link } from 'react-router-dom';
import Login from '../components/Login';

export default function Routes() {
    <Switch>
        <Route path="/login">
            <Login />
        </Route>
    </Switch>
}