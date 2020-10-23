import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Main from './Main'

class App extends Component {
  render() {
   

    return (
      <div className="App">
        <header className="App-header">
          <MyNavbar/>
          <Main/>
        </header>
      </div>
    );
  }
}



export default App