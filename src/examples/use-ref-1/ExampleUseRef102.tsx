import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const useForceRender = () => {
  const [state, setState] = React.useState<number>(0);
  return () => setState(state + 1);
};

const ExampleUseRef102 = () => {
  const log = useLog();

  const ref = React.useRef<number>(0);
  log("virtual-render", { ref });

  const forceRender = useForceRender();

  return (
    <>
      <pre>{JSON.stringify(ref, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="Do nothing ref-wise"
            onClick={() => {
              /* NOOP */
              log("Ref: ", { ref });
              forceRender();
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment"
            onClick={() => {
              ref.current++;
              log("Ref: ", { ref });
              forceRender();
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset to 0"
            onClick={() => {
              ref.current = 0;
              log("Ref: ", { ref });
              forceRender();
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseRef102;
