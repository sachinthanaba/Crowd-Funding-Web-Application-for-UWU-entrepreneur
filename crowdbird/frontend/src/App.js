import React from 'react'
import "./App.css"
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import IndexView from './views/IndexView';
import ContactUsView from './views/ContactUsView';
import SignupView from './views/SignUpView';
import LoginView from './views/LoginView';
import IdeaSubmissionView from './views/IdeaSubmissionView';
import AdvertiesmentView from './views/AdvertiesmentView';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path='/login' exact component={LoginView} />
          <Route path='/sign-up' exact component={SignupView} />
          <div>
            <HeaderComponent/>
            <Route path='/' exact component={IndexView} />
            <Route path='/contact-us' exact component={ContactUsView} />
            <Route path='/advertisements' exact component={AdvertiesmentView} />
            <Route path='/admin-panel' exact component={ContactUsView} />
            <Route path='/submission' exact component={IdeaSubmissionView} />
            <FooterComponent/>
          </div>
        </Switch>
      </Router>
  )
}

export default App
