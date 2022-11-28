import styles from "./displayGameResult.module.scss";

interface Props {
  resultGame: { state: string; ammount: string };
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const DisplayGameResult: React.FC<Props> = ({ resultGame, setShowResult }) => {
  let boxStyle;

  if(resultGame.state === "win") boxStyle = 'winShadow';
  else if(resultGame.state === "draw") boxStyle = 'drawShadow';
  else boxStyle = 'lostShadow';

  return (
    <>
      <div className="backDrop" onClick={() => setShowResult(false)}></div>
      <div className={styles.showResult}>
        <div
          className={`${styles.gameResultShow} ${styles[boxStyle]}`}
        >
          {resultGame.state.toUpperCase()}{" "}
          <span>
            {resultGame.state === "win" && `+${resultGame.ammount}$ APT`}
          </span>
        </div>
      </div>
    </>
  );
};

export default DisplayGameResult;
