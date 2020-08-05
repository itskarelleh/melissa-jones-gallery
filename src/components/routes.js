import React from 'react';
import { BrowserRouter as Router,
Route,
Switch,
Link } from 'react-router-dom';
import About from '../screens/About';
import Authenticate from '../screens/Authenticate';
import Gallery from '../screens/Gallery';
import Blog from '../screens/Blog';
import Home from '../screens/Home';
import MainNav from './navbar/MainNav';

export default function Routes() {
    return(
        <Router>
            <MainNav />
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route path ="/about" component={About} />
                <Route path ="/authenticate" component={Authenticate} />
                <Route path ="/blog" component={Blog} />
                <Route path ="/gallery" component={Gallery} />
            </Switch>
        </Router>
    )
}