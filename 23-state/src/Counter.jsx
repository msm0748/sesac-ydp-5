import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  handleIncrease = () => {
    // state로 사용하기 위한 커스텀 메서드를 만들수 있음, 화살표 함수로 해야 이벤트로 연결 해줄때 인스턴스와 this가 안 끊김
    this.setState({
      // 상태를 바꾸기 위한 함수
      number: this.state.number + 2, // counter 현재값에 +1
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        <h3>Number: {number}</h3>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
