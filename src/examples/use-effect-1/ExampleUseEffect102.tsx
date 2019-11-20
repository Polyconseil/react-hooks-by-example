import React from "react";
import ActionButton from "../../commons/ActionButton";

const SubComponent = ({
  value,
  setValue,
  otherValue,
  setOtherValue
}: {
  value: number;
  setValue: (newValue: number) => void;
  otherValue: { str: string };
  setOtherValue: (newValue: { str: string }) => void;
}) => {
  const [state, setState] = React.useState<number>(value);
  const [otherState, setOtherState] = React.useState<any>(otherValue);

  React.useEffect(() => {
    setState(value);
  }, [value, setState]);
  React.useEffect(() => {
    setOtherState(otherValue);
  }, [otherValue, setOtherState]);

  return (
    <>
      <pre>{JSON.stringify({ value, state, otherState }, null, 2)}</pre>
      <ul>
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
        <li>
          <ActionButton
            label="Change other state"
            onClick={() => {
              setOtherState({ someProps: "zefzefz" });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Change super other state"
            onClick={() => {
              setOtherValue({ str: "zezfez" });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset super state"
            onClick={() => {
              setValue(0);
              setOtherValue({ str: "" });
            }}
          />
        </li>
      </ul>
    </>
  );
};

const ExampleUseState106 = () => {
  const [counter, setCounter] = React.useState<number>(0);
  const [str, setStr] = React.useState<{ str: string }>({ str: "" });

  return (
    <SubComponent value={counter} setValue={setCounter} otherValue={str} setOtherValue={setStr} />
  );
};

export default ExampleUseState106;
