import React from 'react'
import LoginForm from './pages/LoginForm'
import LandingPage from "./pages/LandingPage/index"
import Registration from './pages/Registration/index.js'
import Riverside from './pages/Riverside'
import WildCamping from './pages/WildCamping'
import Header from './components/Header'
import CampPage from './pages/CampPage'
import "./index.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Auth() {
    return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/loginform" component={LoginForm} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/riverside" component={Riverside} />
          <Route exact path="/wildcamping" component={WildCamping} />
          <Route exact path="/camppage" component={CampPage} />

        </Switch>
    </Router>
    )
}

export default Auth
        
        

            
