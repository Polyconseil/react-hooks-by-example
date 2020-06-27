import React from "react";

export interface IProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ActionButton = ({ label, onClick }: IProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ActionButton;
