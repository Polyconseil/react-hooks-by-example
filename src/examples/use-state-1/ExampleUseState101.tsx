import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseState101 = () => {
  const log = useLog();
  const [state, setState] = React.useState<number>(0);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Do nothing state-wise"
            onClick={() => {
              /* NOOP */
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment"
            onClick={() => {
              setState(state + 1);
              log("after increment", state);
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

export default ExampleUseState101;
