import React from "react";
import ActionButton from "../../commons/ActionButton";
import cloneDeep from "lodash.clonedeep";
import { useLog } from "../../commons/ExampleBloc";

const SubComponent = ({
  parentValue,
  setParentValue,
}: {
  parentValue: { str: string };
  setParentValue: (newValue: { str: string }) => void;
}) => {
  const log = useLog();
  const [state, setState] = React.useState<any>(parentValue);
  const [shouldSetSuperState, setShouldSetSuperState] = React.useState<boolean>(false);

  log("render");

  React.useEffect(() => {
    log("use effect");
    if (shouldSetSuperState) setParentValue(state);
    setState(parentValue);
  }, [parentValue, setParentValue, state, setState, shouldSetSuperState, log]);

  return (
    <>
      <pre>{JSON.stringify({ state, shouldSetSuperState }, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Change other state"
            onClick={() => {
              setState({ someProps: "zefzefz" });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Change state option"
            onClick={() => {
              setShouldSetSuperState((state) => !state);
            }}
          />
        </li>
      </ul>
    </>
  );
};

const ExampleUseState106 = () => {
  const [str, setStr] = React.useState<{ str: string }>({ str: "" });

  return <SubComponent parentValue={cloneDeep(str)} setParentValue={setStr} />;
};

export default ExampleUseState106;
