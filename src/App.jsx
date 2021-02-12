import React from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>

                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/service' component={Service} />
                <Route path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
            <Footer/>


        </>
    )
}

export default App;