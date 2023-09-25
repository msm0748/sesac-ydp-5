import './App.css';

function App() {
  const name = 'seokmin';
  const student = 'sesac';

  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
    textAlign: 'center',
  };
  return (
    <>
      {/* js 문법 사용
    - {}로 감싸면 js표현식 사용 가능
    - {}안에서 삼항 연산자 사용 가능 (if, for문 사용 불가) */}
      <div>{name} 안녕?</div>
      <div>{student === 'sesac' ? <span>새싹인</span> : <span>새싹이 뭐지</span>}</div>
      {/* 3. style 속성
        - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
        - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야함 (ex. backgroundColor) */}

      <div style={styles}>스타일 적용</div>
      <div style={{ fontSize: '100px' }}>스타일 적용2</div>

      {/* 4. className 사용 
        - class 속성이 아닌 className 속성 사용 (ex. <div className="App"></div>) */}

      {/* 5. closing tag
          - opening tag(빈태그)도 closing tag가 필요 */}
    </>
  );
}

export default App;
