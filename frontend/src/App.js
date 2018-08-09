import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    return (
      <div className = 'item'>
        {this.state.todos.map(item => (
          <div className = 'card' key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
