/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState101Code from "!raw-loader!./ExampleUseState101";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState102Code from "!raw-loader!./ExampleUseState102";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState103Code from "!raw-loader!./ExampleUseState103";
import React from "react";
import { IExample } from "../../commons/types";
import ExampleUseState101 from "./ExampleUseState101";
import ExampleUseState102 from "./ExampleUseState102";
import ExampleUseState103 from "./ExampleUseState103";

const examples: IExample[] = [
  {
    title: "useState 101",
    Component: ExampleUseState101,
    code: ExampleUseState101Code,
    preface: (
      <>
        The first of the three basic hooks, useState() makes it possible to link
        a state with the current component.
        <br />
        When the state changes, the component will re-render.
      </>
    ),
    explanation: (
      <>
        React triggers a new render of the component when the state changes.{" "}
        <br />
        Nevertheless, when reseting twice in a row the state, we don't (always)
        see a re-render. Why is that ?
      </>
    )
  },
  {
    title: "useState 102",
    Component: ExampleUseState102,
    code: ExampleUseState102Code,
    preface: (
      <>
        Explore the right way to update a state and try to understand why
        mutating a state in-place is a bad idea when using React
      </>
    ),
    explanation: (
      <>
        React compares the previous and new value when setting the state (using
        Object.is).
        <br />
        When directly mutating an object, the object itself is still the same
        (only it's content changed), thus it is needed to consider state as
        immutable and alway create new ones.
        <br />
        Typescript can help you by using Readonly&lt;IMyObject&gt;
        <br />
        As you can see, in some cases with this version of React the component
        function is called even when the state is mutated directly, but the DOM
        is not updated anyway.
      </>
    )
  },
  {
    title: "useState 103",
    Component: ExampleUseState103,
    code: ExampleUseState103Code,
    preface: <>Both "Increment" buttons should work the same right ?</>,
    explanation: (
      <>
        useState's setter works asynchronously: the component will see the
        updated value only the next time a render is triggered by React. <br />{" "}
        Remember to use a temporary variable to hold the next state if you need
        elsewhere in your component
      </>
    )
  }
];

export default examples;
