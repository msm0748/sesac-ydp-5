import PropTypes from 'prop-types';

function FunctionComponent(props) {
  const student = '홍길동';
  return (
    <div>
      <h1>Hi {student}!</h1>
      <p>여기는 FunctionComponent</p>
      <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '하잉',
};
FunctionComponent.propTypes = {
  name: PropTypes.string,
};

export default FunctionComponent;
