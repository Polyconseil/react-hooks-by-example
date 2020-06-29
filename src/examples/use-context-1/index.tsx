/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseContext101Code from "!raw-loader!./ExampleUseContext101";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleUseContext102Code from "!raw-loader!./ExampleUseContext102";
import React from "react";
import { IExample } from "../../commons/types";
import ExampleUseContext101 from "./ExampleUseContext101";
import ExampleUseContext102 from "./ExampleUseContext102";

const examples: IExample[] = [
  {
    title: "useContext 101",
    Component: ExampleUseContext101,
    code: ExampleUseContext101Code,
    preface: (
      <>
        Quick example of useContext.
        <br />
        How can we improve it ?
      </>
    ),
    explanation: (
      <ul>
        <li>avoid check for null context everywhere</li>
        <li>add logic to context</li>
      </ul>
    )
  },
  {
    title: "useContext 102",
    Component: ExampleUseContext102,
    code: ExampleUseContext102Code,
    preface: <>We create custom hooks to manipulate our context.</>,
    explanation: (
      <ul>
        <li>avoid check for null context everywhere</li>
        <li>add logic to context</li>
      </ul>
    )
  }
];

export default examples;
