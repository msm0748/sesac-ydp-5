import React, { Component } from 'react';

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.createRef()를 담기
  inputRef = React.createRef();
  handleFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input에 focusing 처리</p>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
