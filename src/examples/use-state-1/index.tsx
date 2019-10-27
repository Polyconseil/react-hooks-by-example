/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState101Code from "!raw-loader!./ExampleUseState101";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState102Code from "!raw-loader!./ExampleUseState102";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState103Code from "!raw-loader!./ExampleUseState103";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState104Code from "!raw-loader!./ExampleUseState104";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState105Code from "!raw-loader!./ExampleUseState105";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState106Code from "!raw-loader!./ExampleUseState106";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseState107Code from "!raw-loader!./ExampleUseState107";
import React from "react";
import { IExample } from "../../commons/types";
import ExampleUseState101 from "./ExampleUseState101";
import ExampleUseState102 from "./ExampleUseState102";
import ExampleUseState103 from "./ExampleUseState103";
import ExampleUseState104 from "./ExampleUseState104";
import ExampleUseState105 from "./ExampleUseState105";
import ExampleUseState106 from "./ExampleUseState106";
import ExampleUseState107 from "./ExampleUseState107";

const examples: IExample[] = [
  {
    title: "useState 101",
    Component: ExampleUseState101,
    code: ExampleUseState101Code,
    preface: (
      <>
        The first of the three basic hooks, useState() makes it possible to link a state with the
        current component.
        <br />
        When the state changes, the component will re-render.
      </>
    ),
    explanation: (
      <>
        React triggers a new render of the component when the state changes. <br />
        Nevertheless, when reseting twice in a row the state, we don't (always) see a re-render. Why
        is that ?
      </>
    )
  },
  {
    title: "useState 102",
    Component: ExampleUseState102,
    code: ExampleUseState102Code,
    preface: (
      <>
        React shallow compare current state value and new value and trigger render only when value
        changed.
        <br />
        But how does it handle objets ?
      </>
    ),
    explanation: (
      <>
        Shallow comparaison only compare reference for objects.
        <br />
        To trigger re-render object's reference needs to change or value needs to be updated.
      </>
    )
  },
  {
    title: "useState 103",
    Component: ExampleUseState103,
    code: ExampleUseState103Code,
    preface: (
      <>
        <ul>
          There is two ways to update a state
          <li>pass the new value</li>
          <li>pass a function that will update the state</li>
          <br />
          But are there any difference ?
        </ul>
      </>
    ),
    explanation: (
      <>
        if new state value depends on the previous state you should use the function else if you
        want to use a clean new value you can set this value directly
      </>
    )
  },
  {
    title: "useState 104",
    Component: ExampleUseState104,
    code: ExampleUseState104Code,
    preface: <>How do you initialize a state and can you store a function in a state ?</>,
    explanation: (
      <>
        You can use value or function to initialize a state.
        <br />
        When initialized with a function, useState initial value is only evaluate the first time, it
        might improve perf.
      </>
    )
  },
  {
    title: "useState 105",
    Component: ExampleUseState105,
    code: ExampleUseState105Code,
    preface: (
      <>
        Explore the right way to update a state and try to understand why mutating a state in-place
        is a bad idea when using React
      </>
    ),
    explanation: (
      <>
        React compares the previous and new value when setting the state (using Object.is).
        <br />
        When directly mutating an object, the object itself is still the same (only it's content
        changed), thus it is needed to consider state as immutable and alway create new ones.
        <br />
        Typescript can help you by using Readonly&lt;IMyObject&gt;
        <br />
        As you can see, in some cases with this version of React the component function is called
        even when the state is mutated directly, but the DOM is not updated anyway.
      </>
    )
  },
  {
    title: "useState 106",
    Component: ExampleUseState106,
    code: ExampleUseState106Code,
    preface: <>Both "Increment" buttons should work the same right ?</>,
    explanation: (
      <>
        useState's setter works asynchronously: the component will see the updated value only the
        next time a render is triggered by React. <br /> Remember to use a temporary variable to
        hold the next state if you need elsewhere in your component
      </>
    )
  },
  {
    title: "useState 107",
    Component: ExampleUseState107,
    code: ExampleUseState107Code,
    preface: <>And what if component state depends on props ?</>,
    explanation: (
      <>one the state is initialize the value you passe to subsequent useState is ignored.</>
    )
  }
];

export default examples;
