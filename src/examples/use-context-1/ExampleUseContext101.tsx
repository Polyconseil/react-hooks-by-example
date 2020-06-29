import React from "react";
import ActionButton from "../../commons/ActionButton";

interface CounterProps {
  counter: number;
  setCounter: (newCounter: number) => void;
}

const CounterContext = React.createContext<CounterProps | null>(null);

const Displayer = () => {
  const context = React.useContext(CounterContext);
  if (context) return <pre>{JSON.stringify(context, null, 2)}</pre>;
  else return <></>;
};
const Consumer = () => {
  const context = React.useContext(CounterContext);

  if (context)
    return (
      <ul>
        <li>
          <ActionButton
            label="Increment"
            onClick={() => {
              context.setCounter(context.counter + 1);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Reset"
            onClick={() => {
              context.setCounter(0);
            }}
          />
        </li>
      </ul>
    );
  else return <></>;
};

const ExampleUseContext101 = () => {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Displayer />
        <Consumer />
      </CounterContext.Provider>
    </>
  );
};

export default ExampleUseContext101;
