import React, { Component } from 'react'

export default class RefSampleClass extends Component {
  handleFocus = () => {
    this.inputRef.focus()
  }

  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시 인풋에 포커싱처리</p>
        <input 
          type='text' 
          ref={(ref) => {
            console.log(ref)
            this.inputRef = ref;
          }}
        />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    )
  }
}
