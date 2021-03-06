/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseEffect101Code from "!raw-loader!./ExampleUseEffect101";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseEffect102Code from "!raw-loader!./ExampleUseEffect102";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseEffect103Code from "!raw-loader!./ExampleUseEffect103";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseEffect104Code from "!raw-loader!./ExampleUseEffect104";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseEffect105Code from "!raw-loader!./ExampleUseEffect105";
import React from "react";
import { IExample } from "../../commons/types";
import ExampleUseEffect101 from "./ExampleUseEffect101";
import ExampleUseEffect102 from "./ExampleUseEffect102";
import ExampleUseEffect103 from "./ExampleUseEffect103";
import ExampleUseEffect104 from "./ExampleUseEffect104";
import ExampleUseEffect105 from "./ExampleUseEffect105";

const examples: IExample[] = [
  {
    title: "useEffect 101",
    Component: ExampleUseEffect101,
    code: ExampleUseEffect101Code,
    preface: (
      <>
        The second of the three basic hooks, useEffect() makes it possible to execute some code
        outside of the render function (for example to call a remote API, ...)
        <br />
        The function passed to useEffect() will be called every time the component is rendered.
        <br />
        Can you guess the state the clean-up function will see when called ?
      </>
    ),
    explanation: <>The clean-up function only knows the state of when it was created.</>,
  },
  {
    title: "useEffect 102",
    Component: ExampleUseEffect102,
    code: ExampleUseEffect102Code,
    preface: (
      <>
        An exemple of render-cycle.
        <br />
        Do you see and easy fix to this ?
      </>
    ),
    explanation: (
      <>
        You can compare value in useEffect before calling setState but you should be carefull of
        side effect inside useEffect (as you should be about side effect in reder functions).
      </>
    ),
  },
  {
    title: "useEffect 103",
    Component: ExampleUseEffect103,
    code: ExampleUseEffect103Code,
    preface: (
      <>
        Most of time, we only want useEffect() to be called when the component is mounted for the
        first time or when a specific prop changes
        <br />
        In this example, we want to fetch the data for a specific customer order. Unfortunately,
        there is a mistake in the code (although it seems to work), can you spot it ?
      </>
    ),
    explanation: (
      <>
        We forgot the clean up function! This is bad for 2 reasons :
        <ul>
          <li>
            If the component get unmounted while the fetch() is in progress, it will try to set the
            state inside a component that does not exist anymore... This will not break our app, but
            we will get a warning from React as it is bad practice and might make the life of the
            garbage collector harder.
          </li>
          <li>
            As can be seen with the second button, we might get into inconsistent state: the user
            requested the order 1000 and after 2 seconds, it actually displays the order 2000!
          </li>
        </ul>
        Can you find a way to fix this bug ?
      </>
    ),
  },
  {
    title: "useEffect 104",
    Component: ExampleUseEffect104,
    code: ExampleUseEffect104Code,
    preface: (
      <>
        The simplest way to fix the bug would be to use a library that makes it possible to cancel a
        request (like Axios). <br />
        In this example we are stuck with fetch() and have to find a more ad-hoc way.
      </>
    ),
    explanation: (
      <>
        Great! Obviously, we don't want to repeat the same code everytime we want to fetch data.
        Let's make it a custom hook that we can reuse
      </>
    ),
  },
  {
    title: "useEffect 105",
    Component: ExampleUseEffect105,
    code: ExampleUseEffect105Code,
    preface: <>How does a useEffect handle objects in dependencies ?</>,
    explanation: (
      <>
        Unfortunately, badly.
        <br />
        Keep es-lint updated and be ready to tricks it many times.
      </>
    ),
  },
];

export default examples;
