import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseEffect101 = () => {
  const log = useLog();

  const [state, setState] = React.useState<number>(0);
  log("virtual-render", { state });

  React.useEffect(() => {
    log("useEffect called !", { state });

    return () => {
      log("useEffect's clean-up function called !", { state });
    };
  });

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
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseEffect101;
