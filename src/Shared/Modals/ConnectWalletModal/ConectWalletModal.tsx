import styles from "./connectWalletModal.module.scss";

interface Props {
  closeModal: () => any;
  setUserAccount: React.Dispatch<React.SetStateAction<null>>;
}

const ConectWalletModal: React.FC<Props> = ({ closeModal, setUserAccount }) => {
  const connectMartialWallet = async () => {
    let account = null;

    if (await window.martian.isConnected()) {
      account = await window.martian.account();
    } else {
      account = await window.martian.connect();
    }

    setUserAccount({
      ...account,
      walletType: "martial",
    });
  };

  const connectFewchaWallet = async () => {
    let account = null;

    if (window.fewcha.getBalance().status === 200) {
      account = await window.fewcha.account();
    } else {
      account = await window.fewcha.connect();
    }

    setUserAccount({
      ...account,
      walletType: "fewcha",
    });
  };

  return (
    <>
      <div className={styles.backDrop} onClick={closeModal}></div>

      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalContentWrapper}>
            <div className={styles.modalClose}>
              <svg
                onClick={closeModal}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--TStextColor)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-close"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalTitle}>
                Connect a wallet to continue
              </div>
              <div
                className={styles.walletItem}
                onClick={() => {
                  connectFewchaWallet();
                  closeModal();
                }}
              >
                <div className={styles.walletIcon}>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45 30H15C15 21.75 21.75 15 30 15C38.25 15 45 21.75 45 30Z"
                      fill="white"
                    ></path>
                    <path
                      d="M30 0C13.425 0 0 13.425 0 30C0 46.575 13.425 60 30 60C46.575 60 60 46.575 60 30C60 13.425 46.575 0 30 0ZM30 52.5C17.625 52.5 7.5 42.375 7.5 30C7.5 17.625 17.625 7.5 30 7.5C42.375 7.5 52.5 17.625 52.5 30C52.5 42.375 42.375 52.5 30 52.5Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <span className={styles.walletName}>Fewcha</span>
              </div>

              <div
                className={styles.walletItem}
                onClick={() => {
                  connectMartialWallet();
                  closeModal();
                }}
              >
                <div className={styles.walletIcon}>
                  <img
                    src="https://avatars.githubusercontent.com/u/103241191?s=200&amp;v=4"
                    width="56"
                    height="56"
                    alt="Martian"
                  />
                </div>
                <span className={styles.walletName}>Martian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConectWalletModal;
