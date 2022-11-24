import { useState } from "react";
import OptionalBtn from "../../../components/forms/OptionalBtn/OptionalBtn";
import { betData, coin, recentPlaysCoinflip } from "../../../constants/const";

import styles from "./coinflip.module.scss";
import RecentPlayers from "../../../components/ui/RecentPlayers/RecentPlayers";
import DisplayGameResult from "../../../components/ui/DisplayGameResult/DisplayGameResult";

const Coinflip = () => {
  const [betCount, setBetCount] = useState("1");
  const [coinSign, setCoinSign] = useState("head");
  const [resultGame, setResultGame] = useState({ state: "", ammount: "" });
  const [showResult, setShowResult] = useState(false);

  function flipCoinFn() {
    const coins: Element | null= document.querySelector('.coins');
    coins?.setAttribute("id", "");
    const random = Math.random();
    const result = random < 0.5 ? "head" : "tail";
    setTimeout(function () {
      coins?.setAttribute("id", styles[result + "Flip"]);

      setTimeout(() => {
        let resultG =
          result === coinSign
            ? { state: "win", ammount: String(Number(betCount) * 1.5) }
            : { state: "lost", ammount: "0" };
        setResultGame(resultG);
        setShowResult(true);
      }, 3000);
    }, 100);
  }

  return (
    <div className={styles.coinflip}>
      <div className={styles.coinBox}>
        <div className={styles.flipCoinBox}>
          <div
            className={`${styles.flipCoinItem} coins`}
            id="coins"
          >
            <img
              className={styles.head}
              src="https://tundra.bet/assets/images/coin-head.svg"
              alt="Head"
            />
            <img
              className={styles.tail}
              src="https://tundra.bet/assets/images/coin-tail.svg"
              alt="Tail"
            />
          </div>
        </div>
        <button
          className={`ts-button ts-primary-button large ${styles.flipCoinButton}`}
          onClick={flipCoinFn}
        >
          FLIP COIN
        </button>
      </div>
      <div className={styles.optionsBox}>
        <OptionalBtn
          radioData={coin}
          radioValue={coinSign}
          setRadioValue={setCoinSign}
        />
        <OptionalBtn
          radioData={betData}
          radioValue={betCount}
          setRadioValue={setBetCount}
        />

        <RecentPlayers recentPlaysData={recentPlaysCoinflip}/>
      </div>
      {showResult && <DisplayGameResult setShowResult={setShowResult} resultGame={resultGame}/> }
      
    </div>
  );
};

export default Coinflip;
