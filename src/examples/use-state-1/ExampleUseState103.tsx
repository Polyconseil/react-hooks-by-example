import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseState103 = () => {
  const log = useLog();
  const [state, setState] = React.useState<number>(0);

  return (
    <>
      <pre>{JSON.stringify({ state }, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Increment"
            onClick={() => {
              setState(state + 1);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment multiple dummy"
            onClick={() => {
              const toIncrem = parseInt(prompt("increm ?") || "") || 0;
              log("will dumy increment", toIncrem);
              for (let i = 0; i < toIncrem; i++) setState(state + 1);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment multiple "
            onClick={() => {
              const toIncrem = parseInt(prompt("increm ?") || "") || 0;
              log("will dumy increment", toIncrem);
              for (let i = 0; i < toIncrem; i++) setState(state => state + 1);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset to 0"
            onClick={() => {
              setState(0);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseState103;
