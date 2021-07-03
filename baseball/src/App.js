import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  strikeHandle = () => {
    let strikeCount = this.state.strikes + 1
    if (strikeCount === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
    else {
      this.setState({
        ...this.state,
        strikes: strikeCount
      })
    }
  }

  ballHandle = () => {
    let ballCount = this.state.balls + 1
    if (ballCount === 4) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
    else {
      this.setState({
        ...this.state,
        balls: ballCount
      })
    }
  }

  foulHandle = () => {
    let strikeCount = this.state.strikes
    if (strikeCount === 0) {
      this.setState({
        ...this.state,
        strikes: strikeCount + 1
      })
    }
    else if (strikeCount === 1) {
      this.setState({
        ...this.state,
        strikes: strikeCount + 1
      })
    }
    else if (strikeCount === 2) {
      this.setState({
        ...this.state,
        strikes: strikeCount
      })
    }
  }

  hitHandle = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })

  }

  render() {
    return (
      <div className="App">
        <h2>Baseball</h2>
        <Display count={this.state} />
        <Dashboard
          data={this.state}
          strike={this.strikeHandle}
          ball={this.ballHandle}
          foul={this.foulHandle}
          hit={this.hitHandle} />
      </div>
    );
  }
}

export default App;
