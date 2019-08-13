/* eslint import/no-webpack-loader-syntax: off */
import ExampleMemoization101Code from "!raw-loader!./ExampleMemoization101";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleMemoization102Code from "!raw-loader!./ExampleMemoization102";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleMemoization103Code from "!raw-loader!./ExampleMemoization103";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleMemoization104Code from "!raw-loader!./ExampleMemoization104";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleMemoization105Code from "!raw-loader!./ExampleMemoization105";
/* eslint import/no-webpack-loader-syntax: off */
import ExampleMemoization106Code from "!raw-loader!./ExampleMemoization106";
import React from "react";
import { IExample } from "../../commons/types";
import ExampleMemoization101 from "./ExampleMemoization101";
import ExampleMemoization102 from "./ExampleMemoization102";
import ExampleMemoization103 from "./ExampleMemoization103";
import ExampleMemoization104 from "./ExampleMemoization104";
import ExampleMemoization105 from "./ExampleMemoization105";
import ExampleMemoization106 from "./ExampleMemoization106";

const examples: IExample[] = [
  {
    title: "Memoization 101",
    Component: ExampleMemoization101,
    code: ExampleMemoization101Code,
    preface: (
      <>
        What if you need to run some expensive computations in your render
        function and don't want it to be re-run every-time you render if the
        input parameters are the same ?<br />
        In this example, when we change the label, we don't want the computaiton
        to be re-run, as the values did not change
      </>
    ),
    explanation: (
      <>
        By using <strong>useRef()</strong>, try to improve the situation
      </>
    )
  },
  {
    title: "Memoization 102",
    Component: ExampleMemoization102,
    code: ExampleMemoization102Code,
    preface: (
      <>
        We can use the mutable ref as a cache, but we have some bookkeeping work
        to remember the previous input parameters and invalidate our cache
        <br />
        Now when we change the label, the computation is bypassed and the render
        immediate
      </>
    ),
    explanation: (
      <>
        Obviously, React already provides a hook to handle this case. Can you
        find the correct one ?
      </>
    )
  },
  {
    title: "Memoization 103",
    Component: ExampleMemoization103,
    code: ExampleMemoization103Code,
    preface: <>Much cleaner now !</>,
    explanation: (
      <>
        In this specific case, we could also split <strong>MyComponent</strong>{" "}
        into 2 components and handle the memoization without a hook. Can you
        find the right API to use ?
      </>
    )
  },
  {
    title: "Memoization 104",
    Component: ExampleMemoization104,
    code: ExampleMemoization104Code,
    preface: (
      <>
        <strong>React.memo</strong> is not a hook, but a HOC that will perform a
        shallow comparison on the input props before triggering a render of the
        wrapped component. Sometimes, it can be cleaner to use it instead of the
        more general-pruprpose <strong>useMemo()</strong>
      </>
    ),
    explanation: (
      <>
        Costly computation is a rare use-case in practice, as it should be done
        in a service worker and not in the render thread. A frequent use-case
        for memoization is avoiding useless renders when passing callbacks
      </>
    )
  },
  {
    title: "Memoization 105",
    Component: ExampleMemoization105,
    code: ExampleMemoization105Code,
    preface: (
      <>
        Although we memoized <strong>MyComponent</strong>, it is still rendered
        everytime we force a render of the parent.
        <br /> This is because we build a new instance of the callback everytime
      </>
    ),
    explanation: <>Try to memoize the callback to fix the unoptimal behavior</>
  },
  {
    title: "Memoization 106",
    Component: ExampleMemoization106,
    code: ExampleMemoization106Code,
    preface: (
      <>
        By wrapping our callback inside a <strong>useMemo</strong>, React will
        only instantiate a new instance of the callback when the dependencies
        will change. As the only dependency here is <strong>setLabel</strong>{" "}
        that will never change, we should never get a new callback
      </>
    ),
    explanation: (
      <>
        For callbacks, React also provide <strong>useCallback</strong> that
        works the same way as <strong>useMemo</strong> but accepts directly the
        callback to memoize
      </>
    )
  }
];

export default examples;
