import React from "react";
import ActionButton from "../../commons/ActionButton";
import cloneDeep from "lodash.clonedeep";

const ExampleUseState102 = () => {
  const [state, setState] = React.useState<{ value: { data: number } }>({
    value: { data: 0 }
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
              setState({ value: { data: state.value.data + 1 } });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset to 0"
            onClick={() => {
              setState({ value: { data: 0 } });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Re-apply state copy"
            onClick={() => {
              setState(cloneDeep(state));
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
