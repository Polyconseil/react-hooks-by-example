import React from "react";

const Preface = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        padding: 10,
        color: "#EEEEEE"
      }}
    >
      {children}
    </p>
  );
};

export default Preface;
