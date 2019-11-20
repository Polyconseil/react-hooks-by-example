import React from "react";
import ActionButton from "../../commons/ActionButton";
import cloneDeep from "lodash.clonedeep";
import { useLog } from "../../commons/ExampleBloc";

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
  const log = useLog();
  const [state, setState] = React.useState<number>(value);
  const [otherState, setOtherState] = React.useState<any>(otherValue);
  const [shouldSetSuperState, setShouldSetSuperState] = React.useState<boolean>(false);

  log("render");

  React.useEffect(() => {
    setState(value);
  }, [value, setState]);
  React.useEffect(() => {
    log("use effect");
    if (shouldSetSuperState) setOtherValue(otherValue);
    else setOtherState(otherValue);
  }, [otherValue, setOtherState, setOtherValue, shouldSetSuperState, log]);

  return (
    <>
      <pre>{JSON.stringify({ value, state, otherState, shouldSetSuperState }, null, 2)}</pre>
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
        <li>
          <ActionButton
            label="Change state option"
            onClick={() => {
              setShouldSetSuperState(state => !state);
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
    <SubComponent
      value={counter}
      setValue={setCounter}
      otherValue={cloneDeep(str)}
      setOtherValue={setStr}
    />
  );
};

export default ExampleUseState106;
