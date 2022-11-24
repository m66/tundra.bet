import { Routes, Route } from "react-router-dom";

import MineSweeper from "./Pages/GamePages/MineSweeper/MineSweeper";
import LuckyWheel from "./Pages/GamePages/LuckyWheel/LuckyWheel";
import Blackjack from "./Pages/GamePages/Blackjack/Blackjack";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import GamesMenu from "./components/ui/GamesMenu/GamesMenu";
import Coinflip from "./Pages/GamePages/Coinflip/Coinflip";
import Crash from "./Pages/GamePages/Crash/Crash";
import HomePage from "./Pages/HomePage/HomePage";
import Dice from "./Pages/GamePages/Dice/Dice";
import RPS from "./Pages/GamePages/RPS/RPS";

import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<GamesMenu />} />
          <Route path="/flip" element={<Coinflip />} />
          <Route path="/crash" element={<Crash />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/wheel" element={<LuckyWheel />} />
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/rock" element={<RPS />} />
          <Route path="/mine" element={<MineSweeper />} />
          <Route path="/flip" element={<Coinflip />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;