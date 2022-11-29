import Dropdown from "react-bootstrap/Dropdown";

import styles from "./select.module.scss";

interface Props {
  data: {
    label: string;
    options: string[];
  };
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Select: React.FC<Props> = ({ data, state, setState }) => {
    const handleSelect=(e:any)=>{
        setState(e.target.innerText);
      }
  return (
    <>
      <label className={`ts-label ${styles.label}`}>{data.label}</label>
      <Dropdown onClick={handleSelect} className={styles.dropDown}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {state}
        </Dropdown.Toggle>

        <Dropdown.Menu >
          {data.options.map((i) => (
            <Dropdown.Item key={i}>{i}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Select;
