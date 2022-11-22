import React from 'react';

import { Link } from "react-router-dom";

import styles from './header.module.scss';

const Header:React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src="https://tundra.bet/assets/images/logo.svg" alt="Tundra" />
      </Link>
      <div className={styles.connectWallet}>
        <button className='ts-primary-button ts-button large'>CONNECT WALLET</button>
      </div>
    </header>
  )
}

export default Header