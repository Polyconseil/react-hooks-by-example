/* eslint import/no-webpack-loader-syntax: off */
import ExampleHooksOrder101Code from "!raw-loader!./ExampleHooksOrder101";

import React from "react";
import { IExample } from "../../commons/types";
import ExampleHooksOrder101 from "./ExampleHooksOrder101";

const examples: IExample[] = [
  {
    title: "hooks-order 101",
    Component: ExampleHooksOrder101,
    code: ExampleHooksOrder101Code,
    preface: (
      <>
        Obviously never do that, and the eslint rule{" "}
        <strong>react-hooks/rules-of-hooks</strong> is here to protect you!
        <br />
        Play a little with this example and try to guess what trick React uses
        to remember which state is which.
      </>
    ),
    explanation: (
      <>
        As you were able to guess, React uses the call order of the hooks to
        remember which is which. Therefore, hooks should never be called inside
        a condition or a loop, and always in the component top level.
      </>
    )
  }
];

export default examples;
