import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const fakeFetch = (id: number): Promise<{ json: () => Promise<{ name: string }> }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        json: async () => {
          return { name: `Order #${id}` };
        }
      });
      // We simulate the server response time by using
      // the order id as a milliseconds wait time
    }, id);
  });
};

/**
 * TODO: handle promise rejection
 */
function usePromise<T>(promiser: () => Promise<T>) {
  const [result, setResult] = React.useState<T | null>(null);

  React.useEffect(() => {
    let canceled = false;

    promiser().then(result => {
      if (!canceled) {
        setResult(result);
      }
    });

    // The clean-up function will flag the request as canceled
    return () => {
      canceled = true;
    };
  }, [promiser]);

  return result;
}

const DisplayMyOrder = ({ orderId }: { orderId: number }) => {
  const log = useLog();

  // useCallback makes sure to not redefine the fetcher
  // if the orderId did not change
  const fetcher = React.useCallback(() => fakeFetch(orderId).then(req => req.json()), [orderId]);

  const order = usePromise(fetcher);

  log("virtual-render > DisplayMyOrder", { order });

  return <div>My order: {order ? order.name : "Loading..."}</div>;
};

const ExampleUseEffect106 = () => {
  const log = useLog();

  const [orderId, setOrderId] = React.useState<number | null>(null);
  log("virtual-render > Example", { orderId });

  return (
    <>
      <pre>Requested order: {orderId}</pre>
      <ul>
        <li>
          <ActionButton
            label="Display orderId"
            onClick={() => {
              const id = Number.parseFloat(prompt("Order ID?") || "");
              setOrderId(id);
            }}
          />
        </li>
        <li>
          <ActionButton
            label="Display 2 orders quickly"
            onClick={() => {
              setOrderId(2000);
              setTimeout(() => setOrderId(1000), 1);
            }}
          />
          <br />
          (Call order 2000 (2 seconds to get a response) and without waiting call order 1000 (1 sec
          to get a response))
        </li>
      </ul>
      {orderId && <DisplayMyOrder orderId={orderId} />}
    </>
  );
};

export default ExampleUseEffect106;
