import React, { Component } from 'react';

class ClassComponentPrac1 extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    const addFunc = () => {
      this.setState({ number: number + 2 });
    };
    const minusFunc = () => {
      this.setState({ number: number - 1 });
    };
    return (
      <>
        <h1>{number}</h1>
        <button onClick={addFunc}>+2</button>
        <button onClick={minusFunc}>-1</button>
      </>
    );
  }
}

export default ClassComponentPrac1;
