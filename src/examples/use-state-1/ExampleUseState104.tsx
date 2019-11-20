import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseState104 = () => {
  const log = useLog();
  const [state, setState] = React.useState<number>(() => 0);
  const [stateF, setStateF] = React.useState<() => number>(() => () => 0);

  return (
    <>
      <pre>{JSON.stringify({ state, stateF }, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label={"Change function basic"}
            onClick={() => {
              setStateF(() => Math.random() * 100);
            }}
          />
        </li>
        <li>
          <ActionButton
            label={"Change function"}
            onClick={() => {
              setStateF(() => () => Math.random() * 100);
            }}
          />
        </li>
        <li>
          <ActionButton
            label={"Is it a function ?"}
            onClick={() => {
              log("", stateF());
              setState(state => state + 1);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseState104;
