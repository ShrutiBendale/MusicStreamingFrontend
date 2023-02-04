import React, { Component } from 'react'

class Counter extends Component {
  state  = { 
    count: 0
   } 
  
   //the event handlers need to be arrow functioins to bind the `this` object
  handleCounterReset = () => {
    this.setState({count: 0});

  }

  handleCounterDecrement = () => {
    if( this.state.count>0)
      this.setState({count: this.state.count - 1});
  }

  handleCounterIncrement = () => {
    this.setState({count: this.state.count + 1});

  }

  render() { 
    return (
      <div className=">counter-container">
        <p>{this.state.count}</p>
        <button onClick={this.handleCounterIncrement}><h1>+</h1></button>
        <button onClick={this.handleCounterDecrement}><h1>-</h1></button>
        <button onClick={this.handleCounterReset}><h1>reset</h1></button>
      </div>
    );
  }
}
 
export default Counter;