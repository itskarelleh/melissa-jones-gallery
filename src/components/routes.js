import React, { useState } from 'react';
import { BrowserRouter as Router,
Route, Switch } from 'react-router-dom';
import About from '../screens/About';
import Admin from '../screens/Admin';
import Blog from '../screens/Blog';
import Gallery from '../screens/Gallery';
import Home from '../screens/Home';
import MainNav from './navbar/MainNav';
import { AuthProvider } from './admin/AuthProvider';
import PrivateRoute from './admin/PrivateRoute';
import Dashboard from './admin/Dashboard';
import MobileMenu from './navbar/MobileMenu';

export default function Routes() {
    const [ toggle, setToggle] = useState({display: 'none'});
    return(
        <Router>
            <MainNav setToggle={setToggle} />
            <MobileMenu toggle={toggle} setToggle={setToggle} />
            <AuthProvider>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route path ="/about" component={About} />
                    <Route path ="/blog" component={Blog} />
                    <Route path ="/gallery" component={Gallery} />
                    <Route path ="/admin" component={Admin} />
                    <PrivateRoute path ="/dashboard" component={Dashboard} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}