import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseState104 = () => {
  const log = useLog();

  const [render, setRender] = React.useState<boolean>(false);
  const [objectState, setObjectState] = React.useState<{ insideVal: string }>(() => {
    return { insideVal: "" };
  });

  return (
    <>
      <pre>{JSON.stringify({ render, objectState }, null, 2)}</pre>

      <ul>
        <li>
          <ActionButton
            label="render"
            onClick={() => {
              setRender((b) => !b);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Do something stupid v1"
            onClick={() => {
              const s = prompt("Value?") || "";
              log("Will update", s);
              objectState.insideVal = s;
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Do something stupid v2"
            onClick={() => {
              const s = prompt("Value?") || "";
              log("Will update", s);
              objectState.insideVal = s;
              setObjectState(objectState);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseState104;
