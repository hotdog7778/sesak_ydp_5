import React, { Component } from 'react'

export default class RefSampleClass2 extends Component {
  
  inputRef = React.createRef();
  
  handleFocus = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시 인풋에 포커싱처리 - React.createRef()</p>
        <input 
          type='text' 
          ref={this.inputRef}
        />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    )
  }
}
