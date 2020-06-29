import React, { useRef } from "react";
import ActionButton from "../../commons/ActionButton";

const ExampleUseRef103 = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <input ref={ref}></input>
      <ul>
        <li>
          <ActionButton
            label="Set input value"
            onClick={() => {
              if (ref.current === null) {
                return;
              }

              const str = prompt("Value?");
              if (str === null) {
                return;
              }

              ref.current.value = str;
            }}
          />
        </li>
      </ul>
    </>
  );
};

export default ExampleUseRef103;
