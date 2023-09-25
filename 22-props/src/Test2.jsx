import milk from './milk.jpeg';

function Test2() {
  const my_style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20px',
  };
  return (
    <div style={my_style}>
      <h2>안녕하세요. 우유 입니다.</h2>
      <img src={milk} alt="" />
    </div>
  );
}
export default Test2;
