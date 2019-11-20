import React from "react";
import ActionButton from "../../commons/ActionButton";

interface CounterProps {
  counter: number;
  setCounter: (newCounter: number) => void;
}

const CounterContext = React.createContext<CounterProps | null>(null);
const useCounter = () => {
  const context = React.useContext(CounterContext);
  return context!.counter;
};
const useIncrementCounter = () => {
  const context = React.useContext(CounterContext);
  return () => context!.setCounter(context!.counter + 1);
};
const useResetCounter = () => {
  const context = React.useContext(CounterContext);
  return () => context!.setCounter(0);
};

const Displayer = () => {
  const counter = useCounter();
  return <pre>{JSON.stringify(counter, null, 2)}</pre>;
};
const Consumer = () => {
  const increment = useIncrementCounter();
  const reset = useResetCounter();

  return (
    <ul>
      <li>
        <ActionButton
          label="Increment"
          onClick={() => {
            increment();
          }}
        />
      </li>
      <li>
        <ActionButton
          label="Reset"
          onClick={() => {
            reset();
          }}
        />
      </li>
    </ul>
  );
};

const ExampleUseContext102 = () => {
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

export default ExampleUseContext102;
