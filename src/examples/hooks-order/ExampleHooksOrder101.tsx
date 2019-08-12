import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const ExampleHooksOrder101 = () => {
  const log = useLog();

  const [order, setOrder] = React.useState<boolean>(false);

  let number: number, setNumber: (value: number) => void;
  let string: string, setString: (value: string) => void;
  if (order) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const n = React.useState<number>(0);
    number = n[0];
    setNumber = n[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const s = React.useState<string>("");
    string = s[0];
    setString = s[1];
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const s = React.useState<string>("");
    string = s[0];
    setString = s[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const n = React.useState<number>(0);
    number = n[0];
    setNumber = n[1];
  }

  log("virtual-render", { order, number, string });

  return (
    <>
      <pre>{JSON.stringify({ order, number, string }, null, 2)}</pre>
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
            label="Randomize number"
            onClick={() => {
              setNumber(Math.round(Math.random() * 1000));
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Randomize string"
            onClick={() => {
              setString(
                Math.random()
                  .toString(36)
                  .substr(2, 5)
              );
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Switch order"
            onClick={() => {
              setOrder(!order);
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleHooksOrder101;
