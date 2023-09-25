import img from './grass.png';

function Larva() {
  const bodyStyle = { width: '100px', height: '100px', borderRadius: '50%', position: 'absolute' };
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ ...bodyStyle, backgroundColor: 'red', position: 'relative' }}>
        <div
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: 'white',
            borderRadius: 'white',
            position: 'absolute',
            top: '20px',
            left: '25px',
            borderRadius: '50%',
          }}
        >
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: 'black',
              top: '7px',
              left: '0px',
              borderRadius: '50%',
              position: 'absolute',
            }}
          ></div>
        </div>
      </div>
      <div style={{ ...bodyStyle, backgroundColor: 'orange', top: '40px', left: '75px' }}></div>
      <div style={{ ...bodyStyle, backgroundColor: 'yellow', top: '80px', left: '120px' }}></div>
      <div style={{ ...bodyStyle, backgroundColor: 'green', top: '80px', left: '170px' }}></div>
      <div style={{ ...bodyStyle, backgroundColor: 'blue', top: '80px', left: '220px', zIndex: 3 }}></div>
      <img style={{ position: 'relative', zIndex: '2' }} src={img} alt="숲" />
    </div>
  );
}

export default Larva;
