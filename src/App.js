import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    text: "example"
  };

  userInputChangedHandler = (event) => {
    let text = event.target.value;
    this.setState({text: text})
  }

  charClickHandler = (index) => {
    const originalText = this.state.text;
    const result = originalText.slice(0, index) + originalText.slice(index+1);
    this.setState({text: result});
  }
  render = () => {
    return (
      <div className="App">
        <UserInput text={this.state.text} onChange={this.userInputChangedHandler} />
        <ValidationComponent text={this.state.text} />
        {Array.from(this.state.text).map((letter, index) =>{
          return <CharComponent letter={letter} onClick={this.charClickHandler.bind(this, index)} key={index} />
        })}
      </div>
    )
  }
};

export default App;
