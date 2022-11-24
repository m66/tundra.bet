import { Fragment } from "react";
import styles from "./optionalBtn.module.scss";

interface Props {
  radioData: any;
  radioValue: string;
  setRadioValue: React.Dispatch<React.SetStateAction<string>>;
}

const OptionalBtn: React.FC<Props> = ({radioData, radioValue, setRadioValue}) => {
  return (
    <div className={`${styles.withBorder} ${styles.optionGroup}`}>
      {radioData.map((btn:any) => (
        <Fragment key={btn.id}>
          <input
            type="radio"
            name={btn.type}
            checked={btn.value === radioValue}
            key={btn.id}
            value={btn.value}
            id={btn.id}
            onChange={(e) => setRadioValue(e.target.value)}
            style={{ display: "none" }}
          />
          <label
            className={`${styles.optionItem} ${
              radioValue === btn.value && styles.active
            }`}
            htmlFor={btn.id}
          >
            {btn.name}
          </label>
        </Fragment>
      ))}
    </div>
  );
};

export default OptionalBtn;
