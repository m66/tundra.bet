import React from "react";

import styles from "./disconnectBtn.module.scss";

interface Props {
  userAccount: any;
  disconnectHandler: () => void;
  setUserAccount: React.Dispatch<React.SetStateAction<null>>;
}

const DisconnectBtn: React.FC<Props> = ({
  userAccount,
  disconnectHandler,
  setUserAccount,
}) => {
  let userAccountTitle = null;
  if (userAccount && userAccount.walletType === "martial") {
    userAccountTitle =
      userAccount.address.slice(0, 4) + "..." + userAccount.address.slice(-4);
  } else if (userAccount && userAccount.walletType === "fewcha") {
    userAccountTitle =
      userAccount.data.address.slice(0, 4) +
      "..." +
      userAccount.data.address.slice(-4);
  }

  return (
    <div className={styles.userInfo}>
      <div>{userAccountTitle}</div>
      <div
        className={styles.disconnectBtn}
        onClick={() => {
          disconnectHandler();
          setUserAccount(null);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </div>
    </div>
  );
};

export default DisconnectBtn;
