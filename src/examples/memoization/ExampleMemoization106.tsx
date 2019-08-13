import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const MyComponent = ({
  myCallback
}: {
  myCallback: (newLabel: string) => void;
}) => {
  useLog()("virtual-render of MyComponent");

  return (
    <button
      onClick={() => {
        const newLabel = prompt("New label?") || "";
        myCallback(newLabel);
      }}
    >
      Change label from parent component
    </button>
  );
};

const MemoizedMyComponent = React.memo(MyComponent);

const ExampleMemoization106 = () => {
  const log = useLog();

  const [label, setLabel] = React.useState<string>("my-label");
  const [, setValue] = React.useState<number>(0);

  log("virtual-render", { label });

  const myCallback = React.useMemo(
    () => (newLabel: string) => {
      setLabel(newLabel);
    },
    [setLabel]
  );

  return (
    <>
      <pre>{JSON.stringify({ label }, null, 2)}</pre>
      <div>
        <MemoizedMyComponent myCallback={myCallback} />
      </div>
      <ul>
        <li>
          <ActionButton
            label="Randomize value"
            onClick={() => {
              setValue(Math.random());
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleMemoization106;
