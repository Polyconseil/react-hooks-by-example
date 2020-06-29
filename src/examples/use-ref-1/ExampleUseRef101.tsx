import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleUseRef101 = () => {
  const log = useLog();

  const ref = React.useRef<number>(0);
  log("virtual-render", { ref });

  return (
    <>
      <pre>{JSON.stringify(ref, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Log ref value"
            onClick={() => {
              /* NOOP */
              console.log("Ref: ", ref.current);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment"
            onClick={() => {
              ref.current++;
              log("Ref: ", { ref });
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset to 0"
            onClick={() => {
              ref.current = 0;
              log("Ref: ", { ref });
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseRef101;
