import styles from './displayGameResult.module.scss';

interface Props {
    resultGame: { state: string, ammount: string },
    setShowResult: React.Dispatch<React.SetStateAction<boolean>>
}

const DisplayGameResult:React.FC<Props> = ({resultGame, setShowResult}) => {
  return (
    <>
          <div className="backDrop" onClick={() => setShowResult(false)}></div>
          <div className={styles.showResult}>
            <div
              className={`${styles.gameResultShow} ${
                resultGame.state === "win"
                  ? styles.winShadow
                  : styles.lostShadow
              }`}
            >
              {resultGame.state.toUpperCase()}{" "}
              <span>
                {resultGame.state === "win" && `+${resultGame.ammount}$ APT`}
              </span>
            </div>
          </div>
        </>
  )
}

export default DisplayGameResult