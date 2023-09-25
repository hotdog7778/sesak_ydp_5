import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent2 extends Component {
  render() {
    let { text, valid } = this.props;
    valid = function () {
      console.log('콘솔 띄우기 성공!');
    };
    return (
      <div>
        <div>{text}</div>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }

  static defaultProps = {
    text: '이건 기본 text props 입니다.',
    valid: 'default',
  };
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}

export default ClassComponent2;
