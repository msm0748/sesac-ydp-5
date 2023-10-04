function SyntheticEvent() {
  const syntheticEvent = (e) => {
    console.log('Synthetic Event 클릭');
    console.log(e);
    // 콘솔에 찍히는 e 객체는 합성 이벤트
    // 브라우저마다 이벤트 이름과 종류등 이벤트를 처리하는 방식이 다르기 때문에
    // 이를 동일하게 처리하기 위해 React 에서 사용하는 이벤트
  };

  const printInputValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button onClick={syntheticEvent}>버튼</button>
      <br />
      <input type="text" placeholder="입력하세요" onChange={printInputValue} />
    </div>
  );
}
export default SyntheticEvent;
