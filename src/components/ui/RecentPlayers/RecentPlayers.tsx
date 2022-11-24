import RecentPlayersItem from './RecentPlayersItem/RecentPlayersItem'

import styles from "./recentPlayers.module.scss";

interface Props {
    recentPlaysData: any
}

const RecentPlayers:React.FC<Props> = ({recentPlaysData}) => {
    
  const recentPlays = recentPlaysData.map((playData:any) => (
    <RecentPlayersItem playData={playData} key={playData.userAddress} />
  ));

  return (
    <div className={styles.recentPlays}>
      <p className={styles.recentPlaysTitle}>RECENT PLAYS</p>
      <div className={styles.recentPlaysTable}>{recentPlays}</div>
    </div>
  );
};

export default RecentPlayers;
