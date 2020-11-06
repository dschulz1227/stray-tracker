import React, {useState} from 'react';
import {Route, Router, useHistory} from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import MyNavbar from './components/MyNavbar';
import ProfilePage from './components/ProfilePage'

function App() {

    const history = useHistory();

    let userInfo = false;

    const [user,
        setUser] = useState(userInfo);

    return (
        <div className="App">
            <header className="App-header">
                <MyNavbar/>
            </header>

            <Router history={history}>
                <Route exact path='/' component={LandingPage}/>
                <Route
                    exact
                    path='/profile'
                    render={props => <ProfilePage {...props} user={user} component={ProfilePage}/>}/> {/* <Route
                    exact
                    path='/profile'
                    render={props => <ProfilePage {...props} user={user} component={ProfilePage}/>}/>
                <Route exact path='/cards' render={props => <Cards {...props} user={user}/>}/>
                <Route
                    exact
                    path='/EditProfile'
                    render={props => <EditProfile {...props} user={user} component={EditProfile}/>}/> */}
            </Router>

        </div>
    );
}

export default App