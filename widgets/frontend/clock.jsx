import React from 'react';

class Clock extends React.Component {
  constructor()
  {
    super();
    this.state = { time: new Date()}
  }
  
  componentDidMount()
  {
    this.timerId = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount()
  {
    clearInterval(this.timerId);
  }

  tick()
  {
    this.setState({ time: new Date(this.state.time.setSeconds(this.state.time.getSeconds()+1)) });
  }

  render()
  {
    return (
      <div className="clock">
        <h1> Clock </h1>
        <p>{this.state.time.toLocaleTimeString()}</p>
        <p>{this.state.time.toLocaleDateString()}</p>
      </div>
    );
  }
}

export default Clock;