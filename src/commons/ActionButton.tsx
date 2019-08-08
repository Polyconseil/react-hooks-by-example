import React from "react";
import { useLog } from "./ExampleBloc";

export interface IProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ActionButton = ({ label, onClick }: IProps) => {
  const log = useLog();

  return (
    <button
      onClick={e => {
        log(`ActionButton > "${label}"`);
        onClick(e);
      }}
    >
      {label}
    </button>
  );
};

export default ActionButton;
