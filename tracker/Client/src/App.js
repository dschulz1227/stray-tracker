import React, {useState} from 'react';
import { Navbar ,Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Router, useHistory} from "react-router-dom";
import {useCookies} from 'react-cookie';
import './App.css';
import LandingPage from './components/profile/LandingPage';
import ProfilePage from './components/profile/ProfilePage';
import Homepage from './components/profile/Homepage';
import AddCat from './components/cats/AddCat';
import ProtectedRoute from './components/profile/ProtectedRoute';
import DisplayCats from './components/cats/DisplayCats';
import  MyMap  from './components/map/MapContainer';
// import AddFriend from './components/AddFriend'


const App = () => {

    
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
            // hold the user info in an object. If no jwt found, userInfo will hold the
            // false value.
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
        // let d = new Date();
        setCookie(cookieName, jwt)
    };

    return (
        <div className="App">
            <header className="App-header">

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/home">Stray Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/map">View Map</Nav.Link>
                            <Nav.Link href="/report">Add Cat</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/AddFriend">Add Friend</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                <NavDropdown.Divider/> {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                        <Button  color="secondary" onClick={handleLogout}>
                            Logout
                        </Button>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outlined">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>                
            </header>

            <Router history={history}>
                {/* <ProtectedRoute exact path='/home' user={userInfo ? user:null} component={Homepage} handleLogout={handleLogout}/> */}
                <Route
                    exact
                    path='/'
                    handleLogin={handleLogin}
                    render={props => <LandingPage{...props}
                    user={user}
                    handleLogin={handleLogin}
                    setCookieApp={setCookieApp}/>}/>
                <ProtectedRoute
                    exact
                    path='/home'
                    user={user}
                    component={Homepage}
                    handleLogout={handleLogout}/>
                <ProtectedRoute
                    exact
                    path='/profile'
                    user={user}
                    component={ProfilePage}
                    handleLogout={handleLogout}/>
                <ProtectedRoute
                    exact
                    path='/report'
                    user={user}
                    component={AddCat}
                    handleLogout={handleLogout}/>
                {/* <Route
                    exact
                    path='/map'
                    user={user}
                    component={MapContainer}
                    handleLogout={handleLogout}/> */}
                <ProtectedRoute
                    exact
                    path='/cats'
                    render={props => <DisplayCats {...props} user={user}/>}/>
                <Route
                    exact
                    path='/map'
                    render={props => <MyMap {...props} user={user}/>}
                    />
                {/* <ProtectedRoute exact path='/AddFriend' user={user} component={AddFriend} /> */}

            </Router>

        </div>
    );
}


export default App