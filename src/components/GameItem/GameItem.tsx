import React from "react";

import { Link } from "react-router-dom";

import styles from "./gameItem.module.scss";

type GameItemData = {
  title: string;
  imgUrl: string;
  isDisable: boolean;
  url: string;
};

interface GameItemProps {
  gameData: GameItemData;
}

const GameItem: React.FC<GameItemProps> = ({ gameData }) => {
  return (
    <Link
      to={gameData.url}
      className={`${styles.gameItem} ${
        gameData.isDisable && styles.disabledLink
      }`}
    >
      <img src={gameData.imgUrl} alt={gameData.title} />
    </Link>
  );
};

export default GameItem;
