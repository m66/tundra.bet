import React from 'react'

import GameItem from '../GameItem/GameItem';
import {games} from '../../../constants/const'

import styles from './gamesMenu.module.scss';

const GamesMenu = () => {
  return (
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
  )
}

export default GamesMenu