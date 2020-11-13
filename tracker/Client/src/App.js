import React, {useState} from 'react';
import {Route, Router, useHistory} from "react-router-dom";
import {useCookies} from 'react-cookie';
import './App.css';
import LandingPage from './components/LandingPage';
import MyNavbar from './components/MyNavbar';
import ProfilePage from './components/ProfilePage'
import Homepage from './components/Homepage'
import AddCat from './components/AddCat'
import ProtectedRoute from './components/ProtectedRoute'
import MapContainer from './components/MapContainer';
import DisplayCats from './components/DisplayCats';

function App() {

    //GoogleMaps

    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    const cookieName = 'straytracker';
    const [cookies,
        setCookie,
        removeCookie] = useCookies([cookieName]);

    const history = useHistory();

    let userInfo = false;

    function isEmpty(obj) {
        return Object
            .keys(obj)
            .length === 0;
    }

    if (!isEmpty(cookies)) {
        try {
            // jwtDecode just grabs the token. It does not validate the token. userInfo will
            // hold the user info in an object. If no jwt found, userInfo will hold the false
            // value.
            userInfo = cookies.straytracker;
        } catch {
            //if token is not found, send user to landing page.
            history.push("/");
            console.log(cookies)
        }
    }

    console.log(userInfo, 'userinfo check')
    const [user,
        setUser] = useState(userInfo);

    const handleLogin = e => {
        e.preventDefault();
        try {
            userInfo = cookies.straytracker;
            setUser(userInfo);

            history.push("/home");
            window
                .location
                .reload(false);
            alert('You have successfully logged in')
        } catch {
            alert('No token found')
            history.push("/");
        }
    }

    const handleLogout = e => {
        e.preventDefault();
        setUser(false);
        window
            .location
            .reload(false);
        removeCookie(cookieName, {path: '/'});
    }

    const setCookieApp = (jwt) => {
        let d = new Date();
        setCookie(cookieName, jwt)
    };

    console.log(user)




    return (
        <div className="App">
            <header className="App-header">
                <MyNavbar/><span>      <button onClick={handleLogout}>Logout</button>
</span>
                
            </header>

            <Router history={history}>
            {/* <ProtectedRoute exact path='/home' user={userInfo ? user:null} component={Homepage} handleLogout={handleLogout}/> */}
                <Route exact path='/' handleLogin={handleLogin} render={props => <LandingPage{...props} user={user} handleLogin={handleLogin} setCookieApp={setCookieApp}/>}/>
                <ProtectedRoute exact path='/home' user={user} component={Homepage} handleLogout={handleLogout}/> 
                <ProtectedRoute exact path='/profile' user={user} component={ProfilePage} handleLogout={handleLogout}/> 
                <ProtectedRoute exact path='/report' user={user} component={AddCat} handleLogout={handleLogout}/>
                <Route exact path='/map' user={user} component={MapContainer} handleLogout={handleLogout}/>
                <Route exact path='/cats' render={props => <DisplayCats {...props} user={user}/>}/>

            </Router>

        </div> 
    );
}

export default App