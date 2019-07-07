import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }


  componentDidMount() {
    if (this.state.count < 101) {
      setInterval(() => {
        this.setState({ count: this.state.count + 1 })
        if (this.state.count === 101) {
          this.setState({ count: 0 })
        }
      }, 66000);
    }
  }

  render() {
    return (
      <div className="app" >
        <div className="counter">{this.state.count}<span>%</span></div>
      </div>
    );
  }
}

export default App;
