import React, { useState } from "react";

import ConectWalletModal from "../../Shared/Modals/ConnectWalletModal/ConectWalletModal";
import GameItem from "../../components/GameItem/GameItem";
import Header from "../../components/Header/Header";

import { games } from "../../constants/const";
import styles from "./homePage.module.scss";

const HomePage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [userAccount, setUserAccount] = useState(null);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };  

  return (
    <div className={styles.homePage}>
      <Header
        openModal={openModal}
        userAccount={userAccount}
        setUserAccount={setUserAccount}
      />
      <div className={`container ${styles.gamesWrapper}`}>
        <div className={`${styles.primaryGames} row`}>
          {games.primaryGames.map((gameData) => (
            <GameItem gameData={gameData} key={gameData.title} />
          ))}
        </div>
        <div className="row">
          {games.secondaryGames.map((gameData) => (
            <GameItem gameData={gameData} key={gameData.title} />
          ))}
        </div>
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
