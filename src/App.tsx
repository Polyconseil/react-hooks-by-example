import React from "react";
import "./App.css";
import examplesUseState1 from "./examples/use-state-1";
import examplesUseEffect1 from "./examples/use-effect-1";
import examplesUseRef1 from "./examples/use-ref-1";
import examplesHooksOrder from "./examples/hooks-order";
import examplesMemoization from "./examples/memoization";
import logo from "./logo.svg";
import ExampleBloc from "./commons/ExampleBloc";
import { IExample } from "./commons/types";

const genId = (title: string) => {
  return title.replace(/[^a-zA-Z0-9]/g, "_");
};

const App: React.FC = () => {
  let examples: IExample[] = ([] as IExample[])
    .concat(examplesUseState1)
    .concat(examplesUseEffect1)
    .concat(examplesUseRef1)
    .concat(examplesHooksOrder)
    .concat(examplesMemoization);

  return (
    <div className="App">
      <header
        style={{
          backgroundColor: "#282c34",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(10px + 2vmin)",
          color: "white",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 10,
            width: "20%",
            overflow: "auto",
            textAlign: "left"
          }}
        >
          <h4>Examples:</h4>
          <ul>
            {examples.map(example => (
              <li key={example.title} style={{}}>
                <a
                  href={`#${genId(example.title)}`}
                  style={{ textDecoration: "none", color: "#61dafb" }}
                >
                  {example.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
*/
