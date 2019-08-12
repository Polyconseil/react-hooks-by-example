import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const MyComponent = ({ value }: { value: number }) => {
  return <pre>Number inside MyComponent: {value}</pre>;
};

function renderOnce<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return function HocComponent(props: P) {
    const ref = React.useRef<React.ReactElement | null>(null);

    if (ref.current === null) {
      ref.current = <Component {...props} />;
    }

    return ref.current ? ref.current : null;
  };
}

const RenderOnceMyComponent = renderOnce(MyComponent);

const ExampleUseRef103 = () => {
  const log = useLog();

  const [state, setState] = React.useState<number>(0);
  log("virtual-render", { state });

  return (
    <>
      <pre>Number outside MyComponent: {state}</pre>

      <div>
        <RenderOnceMyComponent value={state} />
      </div>

      <ul>
        <li>
          <ActionButton
            label="Do nothing state-wise"
            onClick={() => {
              /* NOOP */
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Increment"
            onClick={() => {
              setState(state + 1);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset to 0"
            onClick={() => {
              setState(0);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseRef103;
