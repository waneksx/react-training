import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userNames: [
      'Ivan',
      'Sakharchuk'
    ]
  };

  userNameChangedHandler = (event) => {
    let name = event.target.value;
    let userNames = [...this.state.userNames]
    userNames[0] = name
    this.setState({userNames: userNames})
  }

  render = () => {
    return (
      <div className="App">
        <UserInput userName={this.state.userNames[0]} onChange={this.userNameChangedHandler} />
        <UserOutput userName={this.state.userNames[0]} />
        <UserOutput userName={this.state.userNames[1]} />
      </div>
    )
  }
};

export default App;
