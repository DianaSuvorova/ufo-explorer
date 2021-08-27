export default function Test() {
  const buttonStyle = {
    margin: '10px',
    fontFamily: '"Arial Black", Gadget, sans-serif',
    fontSize: '20px',
    padding: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: ['0.5s', 'all 0.3s cubic-bezier(.25,.8,.25,1)'],
    backgroundSize: '200% auto',
    color: '#FFF',
    boxShadow: ['0 0 20px #eee', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'],
    borderRadius: ['10px 25px'],
    width: '200px',
    cursor: 'pointer',
    display: 'inline-block',
    backgroundImage: 'linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%)',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>This is a login page</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={buttonStyle}>
          <a style={linkStyle} href="/api/auth/login">
            Login
          </a>
        </div>
      </div>
    </>
  );
}
