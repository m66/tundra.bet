import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameItem from "../../components/GameItem/GameItem";
import Header from "../../components/Header/Header";

import { games } from "../../constants/const";
import styles from "./homePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <Container>
        <Row className={styles.primaryGames}>
          {games.primaryGames.map((gameData) => (
            <Col>
              <GameItem gameData={gameData} key={gameData.title} />
            </Col>
          ))}
        </Row>
        <Row>
          {games.secondaryGames.map((gameData) => (
            <Col>
              <GameItem gameData={gameData} key={gameData.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
