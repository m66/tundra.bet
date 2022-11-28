import { useState } from "react";

import OptionalBtn from "../../../components/forms/OptionalBtn/OptionalBtn";
import DisplayGameResult from "../../../components/ui/DisplayGameResult/DisplayGameResult";
import RecentPlayers from "../../../components/ui/RecentPlayers/RecentPlayers";

import { betData, recentPlaysDice, rps } from "../../../constants/const";

import styles from "./rps.module.scss";
import RpsCard from "./RpsCard/RpsCard";

const RPS = () => {
  const [betCount, setBetCount] = useState("1");
  const [rpsChoice, setRpsChoice] = useState("rock");
  const [resultGame, setResultGame] = useState({ state: "", ammount: "" });
  const [showResult, setShowResult] = useState(false);
  const [randomCardData, setRandomCardData] = useState({cardType: '', isShow: false});

  function play() {
    const rpsTypesArr = ["rock", "paper", "scissors"];
    const randomDig = Math.floor(Math.random() * 3);
    const randomComingResult = rpsTypesArr[randomDig];
    setRandomCardData({cardType: randomComingResult, isShow: true})
    
    setTimeout(() => {
      let resultG;
      if (
        (rpsChoice === "rock" && randomComingResult === "scissors") ||
        (rpsChoice === "scissors" && randomComingResult === "paper") ||
        (rpsChoice === "paper" && randomComingResult === "rock")
      ) {
        resultG = { state: "win", ammount: String(Number(betCount) * 1.5) };
      } else if (rpsChoice === randomComingResult) {
        resultG = { state: "draw", ammount: betCount };
      } else {
        resultG = { state: "lost", ammount: "0" };
      }
      setResultGame(resultG);
      setShowResult(true);
      setRandomCardData({cardType: 'default', isShow: false})

    }, 3000);

    console.log(randomComingResult);
  }

  return (
    <div className="game-section">
      <div className={styles.rpsBox}>
        <OptionalBtn
          radioData={rps}
          radioValue={rpsChoice}
          setRadioValue={setRpsChoice}
        />
        <div className={styles.cardBoxWrapper}>
          <div className={`${styles.cardWrapper} ${randomCardData.isShow ? styles.cardAnimate : ''}`}>
            <RpsCard cardType="default" />
            <RpsCard cardType="rock" />
            <RpsCard cardType="paper" />
            <RpsCard cardType="scissors" />
            <RpsCard cardType={randomCardData.cardType} />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <RpsCard cardType={rpsChoice} />
        </div>
        <button
          className={`ts-button ts-primary-button large ${styles.rpsPlayBtn}`}
          onClick={play}
        >
          PLAY
        </button>
      </div>
      <div className="options-box">
        <OptionalBtn
          radioData={betData}
          radioValue={betCount}
          setRadioValue={setBetCount}
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

export default RPS;
