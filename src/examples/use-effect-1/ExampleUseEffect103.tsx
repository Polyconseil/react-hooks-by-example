import React from "react";
import ActionButton from "../../commons/ActionButton";
import { useLog } from "../../commons/ExampleBloc";

const fakeFetch = (
  id: number
): Promise<{ json: () => Promise<{ name: string }> }> => {
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

const DisplayMyOrder = ({ orderId }: { orderId: number }) => {
  const log = useLog();

  const [orderName, setOrderName] = React.useState<string | null>(null);
  log("virtual-render > DisplayMyOrder", { order: orderName });

  React.useEffect(() => {
    log("useEffect called !", { orderId, orderName });

    let canceled = false;

    fakeFetch(orderId)
      .then(req => req.json())
      // When the request is completed, we check before setting the state
      // that the request was not canceled
      .then(order => {
        if (canceled) {
          log(
            `Request for order ${orderId} was canceled, we don't set the state`
          );
        } else {
          setOrderName(order.name);
        }
      });

    // The clean-up function will flag the request as canceled
    return () => {
      canceled = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  return <div>My order: {orderName}</div>;
};

const ExampleUseEffect103 = () => {
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
          (Call order 2000 (2 seconds to get a response) and without waiting
          call order 1000 (1 sec to get a response))
        </li>
      </ul>
      {orderId && <DisplayMyOrder orderId={orderId} />}
    </>
  );
};

export default ExampleUseEffect103;
