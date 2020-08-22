import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnections from '../helpers/data/connection';
import './App.scss';
import Auth from '../components/Auth/Auth';

fbConnections();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <Auth />
      </div>
    );
  }
}

export default App;
