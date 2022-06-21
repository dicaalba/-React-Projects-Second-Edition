import './Header.css';

function Header(props) {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1> My Portfolio</h1>
    </header>
  );
}

export default Header;
