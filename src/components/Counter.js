import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }


  render() {
    return (
      <div>
        <h1>Welcome to counter</h1>
        <p>Let's change state</p>
        {/* Correct the onClick handler */}
        <button onClick={() => this.increment()}>
          The count is {this.state.count}
        </button>
      </div>
    )
  }
}

export default Counter
