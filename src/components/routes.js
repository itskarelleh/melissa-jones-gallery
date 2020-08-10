import React from 'react';
import { BrowserRouter as Router,
Route,
Switch,
Link } from 'react-router-dom';
import About from '../screens/About';
import Authenticate from '../screens/Authenticate';
import Admin from '../screens/Admin';
import Gallery from '../screens/Gallery';
import Blog from '../screens/Blog';
import Home from '../screens/Home';
import MainNav from './navbar/MainNav';
import { AuthProvider } from './admin/AuthProvider';
import PrivateRoute from './admin/PrivateRoute';
import Dashboard from './admin/Dashboard';
import MobileMenu from './navbar/MobileMenu';

export default function Routes() {
    return(
        <Router>
            <MainNav />
            <MobileMenu />
            <AuthProvider>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route path ="/about" component={About} />
                    <Route path ="/authenticate" component={Authenticate} />
                    <Route path ="/blog" component={Blog} />
                    <Route path ="/gallery" component={Gallery} />
                    <Route path ="/admin" component={Admin} />
                    <PrivateRoute path ="/dashboard" component={Dashboard} />
                </Switch>
            </AuthProvider>
        </Router>
    )
}