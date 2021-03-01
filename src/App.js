import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:"bella", age:28},
      {name:"mark", age:29}
    ]
  }

  SwithHandler = () => {
    //console.log('clicked');
    this.setState({
      persons: [
        {name:"john", age:28},
        {name:"kathie", age:25}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Annyong!</h1>

        <button onClick={this.SwitchHandler}>Click me</button>

        <p>sarangheo</p>
        <Person name={this.state.persons[1].name}/>
        <Person name='huzaifa'>Annyong! Huzaifa</Person>
        <Person name='james'/>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'merhaba'));
  }
}

export default App;
