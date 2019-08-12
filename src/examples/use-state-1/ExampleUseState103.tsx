import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseState103 = () => {
  const log = useLog();

  const [counter, setCounter] = React.useState<number>(0);
  const [counterDoubled, setcounterDoubled] = React.useState<number>(0);

  log("virtual-render", { counter, counterDoubled });

  return (
    <>
      <pre>{JSON.stringify({ counter, counterDoubled }, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Reset"
            onClick={() => {
              setCounter(0);
              setcounterDoubled(0);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment v1"
            onClick={() => {
              log("Before increment", { counter, counterDoubled });
              setCounter(counter + 1);
              setcounterDoubled(counter * 2);
              log("After increment", { counter, counterDoubled });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment v2"
            onClick={() => {
              log("Before increment", { counter, counterDoubled });
              const newCounter = counter + 1;
              setCounter(newCounter);
              setcounterDoubled(newCounter * 2);
              log("After increment", { counter, counterDoubled });
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseState103;
