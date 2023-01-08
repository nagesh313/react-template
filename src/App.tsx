import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var test = "test";
  console.log(test);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// export class ClassReactComponent extends React.Component {
//   render() {
//     return <div>Not Allowed</div>;
//   }
// }
export default App;
