import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseState102 = () => {
  const log = useLog();

  const [numberState, setNumberState] = React.useState<number>(0);
  const [stringState, setStringState] = React.useState<string>("");
  const [objectState, setObjectState] = React.useState<{ insideVal: string }>({
    insideVal: ""
  });
  log("virtual-render", { numberState, stringState, objectState });

  return (
    <>
      <pre>
        {JSON.stringify({ numberState, stringState, objectState }, null, 2)}
      </pre>

      <ul>
        <li>
          <ActionButton
            label="Update numberState"
            onClick={() => {
              const s = Number.parseFloat(prompt("Value?") || "");
              setNumberState(s);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Update stringState"
            onClick={() => {
              const s = prompt("Value?") || "";
              setStringState(s);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Update objectState"
            onClick={() => {
              const s = prompt("Value?") || "";
              setObjectState({ insideVal: s });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Do something stupid v1"
            onClick={() => {
              const s = prompt("Value?") || "";
              objectState.insideVal = s;
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Do something stupid v2"
            onClick={() => {
              const s = prompt("Value?") || "";
              objectState.insideVal = s;
              setObjectState(objectState);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseState102;