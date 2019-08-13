import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";
import countPrimes from "./countPrimes";

const MyComponent = ({
  values,
  label
}: {
  values: number[];
  label: string;
}) => {
  const log = useLog();

  const ref = React.useRef<{ previousValues: number[]; primes: number }>();

  // Cache invalidation
  if (ref.current && ref.current.previousValues !== values) {
    ref.current = undefined;
  }

  // Cache computation
  if (!ref.current) {
    log("Before countPrimes");
    const primes = countPrimes(values);
    log("After countPrimes");
    ref.current = {
      // We need to track the previous parameters
      previousValues: values,
      primes
    };
  }

  return (
    <>
      Primes in {label}: {ref.current && ref.current.primes}
    </>
  );
};

const ExampleMemoization102 = () => {
  const log = useLog();

  const [values, setValues] = React.useState<number[]>([]);
  const [label, setLabel] = React.useState<string>("my-label");
  log("virtual-render", { valuesLength: values.length, label });

  return (
    <>
      <pre>
        {JSON.stringify({ valuesLength: values.length, label }, null, 2)}
      </pre>
      <div>
        <MyComponent values={values} label={label} />
      </div>
      <ul>
        <li>
          <ActionButton
            label="Generate random values"
            onClick={() => {
              let values = [];
              for (let i = 0; i < 1000000; i++) {
                values.push(Math.floor(Math.random() * 1000000));
              }
              setValues(values);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Randomize label"
            onClick={() => {
              setLabel(
                Math.random()
                  .toString(36)
                  .substr(2, 5)
              );
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleMemoization102;
