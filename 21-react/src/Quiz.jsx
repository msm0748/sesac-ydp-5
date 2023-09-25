import './Quiz.css';

function Quiz() {
  const name = '로이';
  const animal = '강아지';
  const underline = {
    textDecoration: 'underline',
  };
  const a = 4;
  const b = 3;

  const title = 'Hello World';
  return (
    <div>
      <h1>퀴즈</h1>

      <h2>1번 문제</h2>
      <div>
        이것은 div입니다
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div>

      <h2>2번 문제</h2>
      <div>
        <h2>
          제 반려 동물의 이름은 <span style={underline}>{name}</span>입니다.
        </h2>
        <h2>
          <span style={underline}>{name}</span>는 <span style={underline}>{animal}</span>입니다.
        </h2>
      </div>

      <h2>3번 문제</h2>
      <p>{3 + 5 === 8 ? <span>정답입니다.</span> : <span>오답입니다.</span>}</p>

      <h2>4번 문제</h2>
      <p>{a > b && <span>a가 b보다 큽니다.</span>}</p>

      <h2>5번 문제</h2>
      <div className="test">{title}</div>
      <div className="input">
        <label htmlFor="id">아이디 : </label>
        <input type="text" id="id" />
      </div>
      <div className="input">
        <label htmlFor="password">비밀번호 : </label>
        <input type="password" id="password" />
      </div>

      <h2>6번 문제</h2>
      <div style={{ display: 'flex' }}>
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </div>
  );
}

export default Quiz;
