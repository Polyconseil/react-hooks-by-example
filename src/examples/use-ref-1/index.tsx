/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseRef101Code from "!raw-loader!./ExampleUseRef101";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseRef102Code from "!raw-loader!./ExampleUseRef102";
import React from "react";
import { IExample } from "../../commons/types";
import ExampleUseRef101 from "./ExampleUseRef101";
import ExampleUseRef102 from "./ExampleUseRef102";

const examples: IExample[] = [
  {
    title: "useRef 101",
    Component: ExampleUseRef101,
    code: ExampleUseRef101Code,
    preface: (
      <>
        The last of the three basic hooks, <strong>useRef()</strong> makes it
        possible to attach some data to the component in a mutable way without
        triggering re-render
        <br />
        The ref identity and state is preserved during the life of the component
      </>
    ),
    explanation: (
      <>
        As you can see, although we update the value inside the reference, no
        re-render is triggered. <br />
        Can you find a way to force a re-render to display the updated value
        inside the ref ? Maybe even make it a custom hook !
      </>
    )
  },
  {
    title: "useRef 102",
    Component: ExampleUseRef102,
    code: ExampleUseRef102Code,
    preface: (
      <>
        We use <strong>useState</strong> inside a custom hook that will trigger
        a re-render when called. This way, we are able to display the content of
        the ref.
      </>
    )
  }
];

export default examples;
