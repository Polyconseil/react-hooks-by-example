/* eslint import/no-webpack-loader-syntax: off */
import BeforeCode from "!raw-loader!./Before";
import React from "react";
import { IExample } from "../../commons/types";
import Before from "./Before";

const examples: IExample[] = [
  {
    title: "Scenario 'order': before",
    Component: Before,
    code: BeforeCode,
    preface: (
      <>
        Can you find a way to technically improve this very simple app by using
        what you learned aboot React and hooks ?
      </>
    )
  }
];

export default examples;
