import PropTypes from 'prop-types';

function Quiz({ food, imgSrc, title, author, price, type, text, valid }) {
  return (
    <div>
      <h2>1번째 문제</h2>
      <p style={{ color: 'red' }}>{food}</p>

      <h2>2번째 문제</h2>
      <div style={{ backgroundColor: 'beige', padding: '40px' }}>
        <h3 style={{ fontSize: '26px' }}>이번주 베스트셀러</h3>
        <img style={{ width: '400px' }} src={imgSrc} alt="이미지" />
        <div>{title}</div>
        <div style={{ textAlign: 'left' }}>저자: {author}</div>
        <div style={{ textAlign: 'left' }}>판매가: {price}원</div>
        <div style={{ textAlign: 'left' }}>구분: {type}</div>
      </div>

      <h2>3번째 문제</h2>
      <p>{text}</p>
      <button onClick={valid}>콘솔 메세지</button>
    </div>
  );
}

Quiz.defaultProps = {
  food: '치킨',
  text: '이건 기본 text props입니다.',
};

Quiz.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Quiz;
