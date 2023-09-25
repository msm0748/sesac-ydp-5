function Test() {
  const name = '문석민';
  const my_style = {
    backgroundColor: 'skyblue',
    color: 'orange',
    fontSize: '40px',
    padding: '12px',
  };
  return <div style={my_style}>{name}</div>;
}
export default Test;
