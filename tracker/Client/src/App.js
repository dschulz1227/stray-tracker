import React from 'react';
import './App.css';
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import User from './components/User'

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Main/>



      {/* <Router history={history}>
                <Route exact path='/' component={HomePage}/>
                <Route
                    exact
                    path='/ProfilePae'
                    render={props => <CreateTask {...props} user={user}/>}/>
                <Route
                    exact
                    path='/profile'
                    render={props => <MyProfile {...props} user={user} component={MyProfile}/>}/>
                <Route exact path='/cards' render={props => <Cards {...props} user={user}/>}/>
                <Route
                    exact
                    path='/EditProfile'
                    render={props => <EditProfile {...props} user={user} component={EditProfile}/>}/>
            </Router> */}
    </div>

  );
}

export default App;
