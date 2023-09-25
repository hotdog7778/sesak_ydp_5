// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class ClassComponent extends React.Component {}
class ClassComponent extends Component {
  student = '홍길동';
  // 클래스형 컴포넌트는 render 함수 필수
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hi {this.student}</h1>
        <p>여긴 ClassComponent</p>
        <p>
          {/* 현재 컴포넌트의 이름은 <b>{this.props.name}</b> */}
          현재 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }

  //   static defaultProps = {
  //     name: '기본값',
  //   };
  //   static propTypes = {
  //     name: PropTypes.string,
  //   };
}

ClassComponent.defaultProps = {
  name: '기본값',
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired, // isRequired 인데 default값이 있다? 그럼 isRequired를 만족하게 된다.
};

export default ClassComponent;
