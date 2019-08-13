import React from "react";

interface IOrderItem {
  id: string;
  quantity: number;
}

interface IOrderContent {
  items: IOrderItem[];
}

const MyItemAudi = ({
  orderContent,
  setOrderContent
}: {
  orderContent: IOrderContent;
  setOrderContent: (orderContent: IOrderContent) => void;
}) => {
  const quantity = orderContent.items.reduce(
    (acc, item) => acc + (item.id === "audi" ? item.quantity : 0),
    0
  );

  const more = () => {
    setOrderContent({
      items: orderContent.items
        .filter(item => item.id !== "audi")
        .concat({ id: "audi", quantity: quantity + 1 })
    });
  };

  return (
    <>
      Audi cars are very nice [...more text...]. Quantity: {quantity}.{" "}
      <button onClick={more}>Add more</button>
    </>
  );
};

const MyItemBmw = ({
  orderContent,
  setOrderContent
}: {
  orderContent: IOrderContent;
  setOrderContent: (orderContent: IOrderContent) => void;
}) => {
  const quantity = orderContent.items.reduce(
    (acc, item) => acc + (item.id === "bmw" ? item.quantity : 0),
    0
  );

  const more = () => {
    setOrderContent({
      items: orderContent.items
        .filter(item => item.id !== "bmw")
        .concat({ id: "bmw", quantity: quantity + 1 })
    });
  };

  return (
    <>
      BMW are nice too, although a little bit tacky [...more text...]. Quantity:{" "}
      {quantity}. <button onClick={more}>Add more</button>
    </>
  );
};

const AllItems = ({
  orderContent,
  setOrderContent
}: {
  orderContent: IOrderContent;
  setOrderContent: (orderContent: IOrderContent) => void;
}) => {
  const [selected, setSelected] = React.useState<string>("audi");

  return (
    <div>
      <div>
        Select car:{" "}
        <select
          onChange={e => {
            setSelected(e.currentTarget.value);
          }}
        >
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
        </select>
      </div>

      <div>
        Car description:
        <div>
          {selected === "audi" && (
            <MyItemAudi
              orderContent={orderContent}
              setOrderContent={setOrderContent}
            />
          )}
          {selected === "bmw" && (
            <MyItemBmw
              orderContent={orderContent}
              setOrderContent={setOrderContent}
            />
          )}
        </div>
      </div>

      <button onClick={() => setOrderContent({ items: [] })}>reset</button>
    </div>
  );
};

const OrderManager = () => {
  const [orderContent, setOrderContent] = React.useState<IOrderContent>({
    items: []
  });

  return (
    <>
      <pre>{JSON.stringify(orderContent, null, 2)}</pre>
      <AllItems orderContent={orderContent} setOrderContent={setOrderContent} />
    </>
  );
};

export default OrderManager;
