import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseState102 = () => {
  const initial = {
    value: { data: 0 },
  };
  const log = useLog();
  const [state, setState] = React.useState<{ value: { data: number } }>(initial);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Increment"
            onClick={() => {
              setState({ value: { data: state.value.data + 1 } });
              log("increment");
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Copy and re-apply"
            onClick={() => {
              setState({ value: { data: state.value.data } });
              log("copy and re-apply");
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Re-apply state"
            onClick={() => {
              setState(state);
              log("re-apply state");
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseState102;
