import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
  student = '홍길동';
  render() {
    return (
      <div>
        <h1>Hi {this.student}</h1>
        <p>여기는 ClassComponent</p>
        <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p>
      </div>
    );
  }
  // static defaultProps = {
  //   name: '기본 이름',
  // };
  // static propsTypes = {
  //   name: PropTypes.string,
  // };
}

// ClassComponent.defaultProps = {
//   name: '기본 이름',
// };

ClassComponent.propsTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;
