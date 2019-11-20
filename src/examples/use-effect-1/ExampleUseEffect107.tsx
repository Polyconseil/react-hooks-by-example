import React from "react";
import ActionButton from "../../commons/ActionButton";

const Child = ({ strs, setStrs }: { strs: string[]; setStrs: (strs: string[]) => void }) => {
  const [state, setState] = React.useState<string[]>(strs);

  React.useEffect(() => {
    setState(strs);
    // eslint-disable-next-line
  }, strs);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <ul>
        <li>
          <ActionButton
            label="add string"
            onClick={() => {
              const str = prompt();
              if (str) {
                setStrs([...strs, str]);
              }
            }}
          />
        </li>
      </ul>
    </>
  );
};

const ExampleUseEffect107 = () => {
  const [strs, setStrs] = React.useState<string[]>([]);

  return <Child strs={strs} setStrs={setStrs} />;
};

export default ExampleUseEffect107;
