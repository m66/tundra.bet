import { useState, useRef } from "react";

import DisplayGameResult from "../../../components/ui/DisplayGameResult/DisplayGameResult";
import RecentPlayers from "../../../components/ui/RecentPlayers/RecentPlayers";
import OptionalBtn from "../../../components/forms/OptionalBtn/OptionalBtn";
import DicePiece from "./DicePiece/DicePiece";

import { betData, dice, recentPlaysDice } from "../../../constants/const";

import styles from "./dice.module.scss";

const Dice = () => {
  const [diceBetData, setDiceBetData] = useState("1");
  const [diceChoice, setDiceChoice] = useState("odd");

  const [resultGame, setResultGame] = useState({ state: "", ammount: "" });
  const [showResult, setShowResult] = useState(false);
  const childRef: any = useRef(null);

  const handleClick = () => {
    childRef?.current.diceRoll();
  };

  return (
    <div className={styles.dice}>
      <div className={styles.diceBox}>
        <div className={styles.diceItemBox}>
          <div className={styles.diceItem}>
            {/* <img src="https://tundra.bet/assets/images/Dice1.svg" alt="dice-1" /> */}
            <DicePiece
              ref={childRef}
              setResultGame={setResultGame}
              diceChoice={diceChoice}
              diceBetData={diceBetData}
              setShowResult={setShowResult}
            />
          </div>
        </div>
        <button
          className={`ts-button ts-primary-button large ${styles.diceBtn}`}
          onClick={handleClick}
        >
          ROLL DICE
        </button>
      </div>
      <div className={styles.optionsBox}>
        <OptionalBtn
          radioData={dice}
          radioValue={diceChoice}
          setRadioValue={setDiceChoice}
          withBorder={true}
        />
        <OptionalBtn
          radioData={betData}
          radioValue={diceBetData}
          setRadioValue={setDiceBetData}
          withBorder={true}
        />
        <RecentPlayers recentPlaysData={recentPlaysDice} />
      </div>
      {showResult && (
        <DisplayGameResult
          setShowResult={setShowResult}
          resultGame={resultGame}
        />
      )}
    </div>
  );
};

export default Dice;
