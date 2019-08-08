import React, { useState } from "react";

const Explanation = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState<Boolean>(false);

  return (
    <p
      style={{
        padding: 10,
        color: "#61dafb",
        backgroundColor: show ? "#000000" : "#61dafb"
      }}
      onDoubleClick={() => setShow(!show)}
    >
      {children}
    </p>
  );
};

export default Explanation;
