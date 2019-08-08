import React from "react";
import "./App.css";
import ExampleUseState from "./examples/ExamplesUseState/index";
import logo from "./logo.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">
          React 102
          <br />
          Hooks by example
        </p>
      </header>
      <ExampleUseState />
    </div>
  );
};

export default App;

/*

Idées:
 - useState asynchrone
 - pq utiliser un hook custom pour les contextes (permet d'éviter le typecheck sur null & co)
 - react context instantiation or mounting
 - hook component should never update
*/
