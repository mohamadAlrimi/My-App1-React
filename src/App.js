import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyCom />
        <MyCom />
      </header>
    </div>
  );
}
function MyCom() {
  return (
    <>
      <h1> hello muhammed click on the button pleas</h1>
      <img
        src="https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-114337435-1500x1000.jpg"
        alt="logo"
      ></img>
      <br />
      <button>click me here </button>
      <br />
      <button>write anything </button>
    </>
  );
}
export default App;
