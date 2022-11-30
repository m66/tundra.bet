import { useState } from "react";

import OptionalBtn from "../../../components/forms/OptionalBtn/OptionalBtn";
import { mineSweeperBetData } from "../../../constants/const";
import MineBoard from "./MineBoard/MineBoard";
import styles from "./mineSweeper.module.scss";

const MineSweeper = () => {
  const [betCount, setBetCount] = useState("5");

  return (
    <div className="game-section">
      <div className={styles.optionsSide}>
        <div className={`${styles.optionBox} with-border`}>
          <label className="ts-label" htmlFor="">
            Profit on Win
          </label>
          <div className={styles.inputAmount}>
            <div className={styles.inputWrapper}>
              <input
                className={`ts-input ${styles.tsInput}`}
                pattern="[0-9]+"
                placeholder="0"
              />
            </div>
            <div className="ts-input-icon">
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 11.9444C21.7263 11.9444 18.6681 11.9779 15.6129 11.9048C15.2154 11.9048 14.7816 11.3865 14.4448 11.0329C13.6893 10.2403 13.4011 10.1793 12.7033 11.0329C12.0965 11.7584 11.426 11.9962 10.4976 11.9779C7.46359 11.92 4.42961 11.9566 1.39563 11.9566H0C0.239684 10.9201 0.415655 9.98723 0.703883 9.09096C0.758495 8.92329 1.2682 8.82878 1.56857 8.82878C5.08495 8.81049 8.60133 8.7983 12.1177 8.82878C12.9733 8.82878 13.6165 8.62453 14.1626 7.91422C14.8574 7.02099 15.2275 7.02099 15.9405 7.9386C16.1609 8.24643 16.4581 8.4905 16.8021 8.64624C17.1462 8.80197 17.525 8.86388 17.9005 8.82573C19.7785 8.77391 21.6596 8.82573 23.5407 8.7983C24.1474 8.7983 24.4266 8.99645 24.5267 9.58178C24.639 10.3226 24.8149 11.0542 25 11.9444Z"
                  fill="white"
                ></path>
                <path
                  d="M24.8492 15.2885C24.4973 16.3372 24.2424 17.2335 23.8783 18.0901C23.796 18.2033 23.6889 18.2961 23.5653 18.3611C23.4417 18.4261 23.3048 18.4617 23.1653 18.4651C19.2576 18.4864 15.3498 18.5139 11.442 18.4407C10.9445 18.4407 10.3801 17.9499 9.97965 17.5536C9.17868 16.7579 8.9299 16.639 8.25029 17.4926C7.57067 18.3462 6.81218 18.5596 5.79579 18.5017C4.49725 18.4255 3.19264 18.5017 1.89106 18.4529C1.72702 18.436 1.569 18.3817 1.42911 18.2939C1.28922 18.2062 1.17117 18.0875 1.08402 17.9468C0.732081 17.1512 0.49543 16.3037 0.173828 15.3647C0.543974 15.3342 0.798828 15.2946 1.05368 15.2946C3.23208 15.2946 5.41655 15.255 7.59495 15.3098C8.01468 15.3486 8.43726 15.278 8.82199 15.105C9.20672 14.932 9.54062 14.6624 9.79155 14.3221C10.4226 13.5051 10.8079 13.4898 11.4329 14.3221C12.0064 15.0812 12.6769 15.3312 13.6083 15.319C17.061 15.2702 20.5136 15.2976 23.9663 15.2976L24.8492 15.2885Z"
                  fill="white"
                ></path>
                <path
                  d="M3 5.50616C7.93325 -1.29211 18.2549 -1.02689 22.7755 5.45739C21.3768 5.49702 19.9751 5.90857 19.0528 4.366C18.998 4.24295 18.9099 4.13784 18.7985 4.06266C18.6871 3.98748 18.557 3.94526 18.4229 3.94081C18.2888 3.93636 18.1561 3.96987 18.04 4.0375C17.924 4.10513 17.8292 4.20417 17.7664 4.32332C16.9958 5.49397 15.9005 5.54275 14.6717 5.52445C11.0977 5.47568 7.52063 5.50616 3.9466 5.50616H3Z"
                  fill="white"
                ></path>
                <path
                  d="M21.5695 21.489C16.7788 26.9124 7.97116 26.6929 3.61133 21.6933C4.06643 21.2634 4.54883 20.8671 4.96145 20.4098C5.44992 19.8702 5.98693 19.7269 6.39349 20.3549C7.10041 21.4402 8.08645 21.5073 9.23329 21.4951C12.9894 21.4494 16.7485 21.4951 20.5045 21.4951L21.5695 21.489Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <label className="ts-label" htmlFor="">
            Mines
          </label>
          <OptionalBtn
            radioData={mineSweeperBetData}
            radioValue={betCount}
            setRadioValue={setBetCount}
            withBorder={false}
          />
        </div>
        <button
          className={`ts-button ts-primary-button large ${styles.mineBetBtn}`}
        >
          BET
        </button>
      </div>

      <div className={styles.mineBoardSection}>
        <MineBoard />
      </div>
    </div>
  );
};

export default MineSweeper;
