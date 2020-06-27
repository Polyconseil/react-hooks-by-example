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
  const [shouldSetSuperState, setShouldSetSuperState] = React.useState<boolean>(false);

  log("render");

  React.useEffect(() => {
    log("use effect");
    if (shouldSetSuperState) setParentValue(parentValue);
  }, [parentValue, setParentValue, shouldSetSuperState, log]);

  return (
    <>
      <pre>{JSON.stringify({ parentValue, shouldSetSuperState }, null, 2)}</pre>
      <ul>
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

const ExampleUseEffect102 = () => {
  const [str, setStr] = React.useState<{ str: string }>({ str: "" });

  return <SubComponent parentValue={cloneDeep(str)} setParentValue={setStr} />;
};

export default ExampleUseEffect102;
