import React from "react";
import ActionButton from "../../commons/ActionButton";

const ExampleUseState102 = () => {
  const initial = {
    value: { data: 0 }
  };
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
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset to 0"
            onClick={() => {
              setState(initial);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Re-apply state"
            onClick={() => {
              setState(state);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseState102;
