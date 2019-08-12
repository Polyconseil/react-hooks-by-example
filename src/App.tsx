import React from "react";
import "./App.css";
import examplesUseState1 from "./examples/use-state-1";
import logo from "./logo.svg";
import examplesUseEffect1 from "./examples/use-effect-1";
import ExampleBloc from "./commons/ExampleBloc";
import { IExample } from "./commons/types";

const genId = (title: string) => {
  return title.replace(/[^a-zA-Z0-9]/g, "_");
};

const App: React.FC = () => {
  let examples: IExample[] = ([] as IExample[])
    .concat(examplesUseState1)
    .concat(examplesUseEffect1);

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
      {examples.map((example, i) => {
        return (
          <ExampleBloc
            key={i}
            id={genId(example.title)}
            prev={examples[i - 1] && genId(examples[i - 1].title)}
            next={examples[i + 1] && genId(examples[i + 1].title)}
            title={example.title}
            Component={example.Component}
            code={example.code}
            preface={example.preface}
            explanation={example.explanation}
          />
        );
      })}
    </div>
  );
};

export default App;

/*

Idées:
 - pq utiliser un hook custom pour les contextes (permet d'éviter le typecheck sur null & co)
 - react context instantiation or mounting
 - hook component should never update
*/
