import styles from "./recentPlayersItem.module.scss";

interface Props {
  playData: {
    userAddress: string;
    betCount: string;
    url: string;
    status: string;
    day: number;
  };
}

const RecentPlayer: React.FC<Props> = ({ playData }) => {
  const userAccountTitle =
    playData.userAddress.slice(0, 4) + "..." + playData.userAddress.slice(-4);

  const countOfDays = Math.floor(
    (Date.now() - playData.day) / (24 * 60 * 60 * 1000)
  );
  return (
    <div className={styles.playItem}>
      <a
        className={`${styles.address} ${styles.playItemColumn}`}
        href={playData.url}
      >
        {userAccountTitle}
      </a>
      <div className={styles.playItemColumn}>flipped</div>
      <div className={`${styles.amount} ${styles.playItemColumn}`}>
        {playData.betCount} $APT
      </div>
      <div className={styles.playItemColumn}>and {playData.status}</div>
      <div className={styles.playItemColumnDate}>
        {countOfDays} day{countOfDays > 1 && "s"} ago
      </div>
    </div>
  );
};

export default RecentPlayer;
