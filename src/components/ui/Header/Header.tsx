import React from "react";

import { Link } from "react-router-dom";
import ConnectButton from "../../forms/ConnectButton/ConnectButton";
import DisconnectBtn from "../../forms/DisconnectBtn/DisconnectBtn";

import styles from "./header.module.scss";

interface Props {
  openModal: () => void;
  userAccount: any;
  setUserAccount: React.Dispatch<React.SetStateAction<null>>;
}

const Header: React.FC<Props> = ({
  openModal,
  userAccount,
  setUserAccount,
}) => {
  const disconnectHandler = async () => {
    userAccount.walletType === "martial"
      ? await window.martian.disconnect()
      : await window.fewcha.disconnect();
  };

  const signInUpBtn = userAccount ? (
    <DisconnectBtn
      userAccount={userAccount}
      disconnectHandler={disconnectHandler}
      setUserAccount={setUserAccount}
    />
  ) : (
    <ConnectButton openModal={openModal} />
  );

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="https://tundra.bet/assets/images/logo.svg" alt="Tundra" />
      </Link>

      <div className={styles.connectWallet}>{signInUpBtn}</div>
    </header>
  );
};

export default Header;
