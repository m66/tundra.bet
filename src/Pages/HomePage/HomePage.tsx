import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import ConectWalletModal from "../../Shared/Modals/ConnectWalletModal/ConectWalletModal";
import Header from "../../components/ui/Header/Header";

import '../GamePages/styles/gamesGlobalStyle.scss'
import styles from "./homePage.module.scss";

const HomePage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [userAccount, setUserAccount] = useState(null);

  function openModal(): void {
    setIsOpenModal(true);
  }

  function closeModal(): void {
    setIsOpenModal(false);
  }

  return (
    <div className={styles.homePage}>
      <Header
        openModal={openModal}
        userAccount={userAccount}
        setUserAccount={setUserAccount}
      />
      <div className="content">
        <Outlet />
      </div>
      {isOpenModal && (
        <ConectWalletModal
          closeModal={closeModal}
          setUserAccount={setUserAccount}
        />
      )}
    </div>
  );
};

export default HomePage;
