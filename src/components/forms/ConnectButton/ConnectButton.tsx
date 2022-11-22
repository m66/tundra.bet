import React from "react";

interface Props {
  openModal: () => any;
}

const ConnectButton: React.FC<Props> = ({openModal}) => {
  return (
    <button className="ts-primary-button ts-button large" onClick={openModal}>
      CONNECT WALLET
    </button>
  );
};

export default ConnectButton;
