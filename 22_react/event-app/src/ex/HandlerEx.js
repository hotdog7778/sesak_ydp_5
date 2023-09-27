import { Component } from 'react';

class HandlerEx extends Component {
  state = {
    msg: 'Hello World!',
  };

  changeState = () => {
    this.setState({ msg: 'GoodBye World' });
  };

  render() {
    const { msg } = this.state;

    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={this.changeState}>changeState</button>
      </div>
    );
  }
}

export default HandlerEx;
