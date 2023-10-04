import { Component } from 'react';

class ClassHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Hello World',
    };
  }

  handleClick = () => {
    this.setState({
      title: 'Goodbye World!',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }
}

export default ClassHandler;
