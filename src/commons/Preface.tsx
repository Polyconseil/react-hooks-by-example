import React from "react";

const Preface = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: "10px 0px",
        color: "#EEEEEE",
      }}
    >
      {children}
    </div>
  );
};

export default Preface;
