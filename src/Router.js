import React from 'react';
import { Route, Switch} from 'react-router-dom'

import App from './components/App'
//Por defecto si no especifico el archivo toma el index.js q este dentro
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Page404 from './components/Page404'

// todo el switch va a devolver un hijo para <App>
const AppRouter = () =>
    <App>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
            <Route component={Page404}/>
        </Switch>


    </App>

export default AppRouter;