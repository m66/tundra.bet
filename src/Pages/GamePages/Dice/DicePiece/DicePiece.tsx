import { forwardRef, useImperativeHandle  } from 'react';

import "./dicePiece.scss";

interface Props {
  setResultGame: any;
  diceChoice: string;
  diceBetData: string;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  ref: any
}

const DicePiece: React.FC<Props> = forwardRef(({
  setResultGame,
  diceChoice,
  diceBetData,
  setShowResult
}, ref) => {
  useImperativeHandle(ref, () => ({
    diceRoll() {
      const roll = Math.floor(Math.random() * 6 + 1);
      const oddEven = roll % 2 === 0 ? "even" : "odd";
      const dice: Element | null = document.querySelector(".dice");
      dice?.removeAttribute("class");
      dice?.setAttribute("class", "dice");
      setTimeout(function () {
        dice?.classList.add("roll-" + roll);
        setTimeout(() => {
          let resultG =
            diceChoice === oddEven
              ? { state: "win", ammount: String(Number(diceBetData) * 1.5) }
              : { state: "lost", ammount: "0" };
  
          setResultGame(resultG);
          setShowResult(true);
        }, 2600);
      }, 1);
    }

  }))

  return (
    <div className="containerD">
      <div className="dice">
        <div className="one">
          <span></span>
        </div>
        <div className="two">
          <span></span>
          <span></span>
        </div>
        <div className="three">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="four">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="five">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="six">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
});

export default DicePiece;
