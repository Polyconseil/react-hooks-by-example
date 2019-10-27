import React from "react";
import ActionButton from "../../commons/ActionButton";

const SubComponent = ({
  value,
  setValue
}: {
  value: number;
  setValue: (newValue: number) => void;
}) => {
  const [state, setState] = React.useState<number>(value);

  return (
    <>
      <pre>{JSON.stringify({ value, state }, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Reset"
            onClick={() => {
              setState(0);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment state"
            onClick={() => {
              setState(state => state + 1);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment super state"
            onClick={() => {
              setValue(value + 1);
            }}
          />
        </li>
      </ul>
    </>
  );
};

const ExampleUseState106 = () => {
  const [counter, setCounter] = React.useState<number>(0);

  return <SubComponent value={counter} setValue={setCounter} />;
};

export default ExampleUseState106;
