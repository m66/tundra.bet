export const games = {
  primaryGames: [
    {
      title: "Coinflip",
      imgUrl: "https://tundra.bet/assets/images/coinflip.svg",
      isDisable: false,
      url: "/flip",
    },
    {
      title: "Crash",
      imgUrl: "https://tundra.bet/assets/images/crash.svg",
      isDisable: true,
      url: "/crash",
    },
    {
      title: "Dice",
      imgUrl: "https://tundra.bet/assets/images/dice.svg",
      isDisable: false,
      url: "/dice",
    },
  ],
  secondaryGames: [
    {
      title: "Lucky wheel",
      imgUrl: "https://tundra.bet/assets/images/wheel.svg",
      isDisable: false,
      url: "/wheel",
    },
    {
      title: "Blackjack",
      imgUrl: "https://tundra.bet/assets/images/blackjack.svg",
      isDisable: true,
      url: "/blackjack",
    },
    {
      title: "Rock Paper scissors",
      imgUrl: "https://tundra.bet/assets/images/rsp.svg",
      isDisable: false,
      url: "/rock",
    },
    {
      title: "Minesweeper",
      imgUrl: "https://tundra.bet/assets/images/mine.svg",
      isDisable: true,
      url: "/mine",
    },
  ],
};

export const recentPlaysCoinflip = [
  {
    userAddress:
      "0x5210d97af993d6afcaed9c9jksaw6d4sd2c8f49b646b7de9f41d5727dd51b897",
    betCount: "5",
    url: "#",
    status: "win",
    day: 1669209031321,
  },
  {
    userAddress:
      "0x1210d97af993d6afwaed9c9jksfw654s42c8349b64657de9fb1d5727dd518897",
    betCount: "10",
    url: "#",
    status: "lost",
    day: 1667209031321,
  },
  {
    userAddress:
      "0x6210d97af993d6afc8ed9c9jksfw654sd2c8349b64657de9fb1d5727dd51s897",
    betCount: "1",
    url: "#",
    status: "win",
    day: 1668209031321,
  },
];

export const betData = [
  { id: "1", name: "1 $APT", value: "1", type: "betCount" },
  { id: "2", name: "5 $APT", value: "5", type: "betCount" },
  { id: "3", name: "10 $APT", value: "10", type: "betCount" },
  { id: "4", name: "15 $APT", value: "15", type: "betCount" },
];

export const mineSweeperBetData = [
  { id: "1", name: "5", value: "5", type: "mineSweeper" },
  { id: "2", name: "10", value: "10", type: "mineSweeper" },
  { id: "3", name: "15", value: "15", type: "mineSweeper" },
  { id: "4", name: "24", value: "24", type: "mineSweeper" },
];

export const coin = [
  { id: "5", name: "HEAD", value: "head", type: "coinSign" },
  { id: "6", name: "TAIL", value: "tail", type: "coinSign" },
];

export const dice = [
  { id: "7", name: "ODD", value: "odd", type: "diceChoice" },
  { id: "8", name: "EVEN", value: "even", type: "diceChoice" },
];

export const wheel = [
  { id: "7", name: "Manual", value: "manual", type: "wheel" },
  { id: "8", name: "Auto", value: "auto", type: "wheel" },
];

export const recentPlaysDice = [
  {
    userAddress:
      "0x5210r97af993d6afcaed9c9jksaw6d4sd2c8f49b646b7de9f41d5727dd51nd8",
    betCount: "5",
    url: "#",
    status: "win",
    day: 1669209031321,
  },
  {
    userAddress:
      "0x1210d97af993d6afwagd9c9jksfw654s42c8349b64657de9fb1d5727dd518f2d",
    betCount: "10",
    url: "#",
    status: "lost",
    day: 1667209031321,
  },
  {
    userAddress:
      "0x6210d97af993d6afcmed9c9jksfw654sd2c8349b64657de9fb1d5727dd51s897",
    betCount: "1",
    url: "#",
    status: "lost",
    day: 1668209031321,
  },
  {
    userAddress:
      "0x6210d97af993d6afcmed9c9jksfw654sd2p8349b64657de9fb1d5727dd51s881",
    betCount: "10",
    url: "#",
    status: "win",
    day: 1668209031321,
  },
  {
    userAddress:
      "0x1210d97af993d6afcmed9c9jksfw654sm2c8349b64657de9fb1d5727dd51s8sa",
    betCount: "1",
    url: "#",
    status: "lost",
    day: 1668209031321,
  },
  {
    userAddress:
      "0x0210d97af993d6afnmed9c9jksfw654sd2c8349b64657de9fb1d5727dd51s747",
    betCount: "1",
    url: "#",
    status: "win",
    day: 1668209031321,
  },
  {
    userAddress:
      "0x8210d97af993d4afcmed9c9jksfw654sd2c8349b64657de9fb1d5727dd51s832",
    betCount: "15",
    url: "#",
    status: "win",
    day: 1668209031321,
  },
];

export const rps = [
  { id: "9", name: "ROCK", value: "rock", type: "rps" },
  { id: "10", name: "SCISSORS", value: "scissors", type: "rps" },
  { id: "11", name: "PAPER", value: "paper", type: "rps" },
];

export const rspCards = [
  {
    id: 0,
    cardType: "default",
  },
  {
    id: 1,
    cardType: "rock",
  },
  {
    id: 2,
    cardType: "paper",
  },
  {
    id: 3,
    cardType: "scissors",
  },
];

export const wheelRisk = {
  label: 'Risk',
  options: ['Low', 'Medium', 'High']
}

export const wheelSegments = {
  label: 'Segments',
  options: ['8', '16', '24']
}

export const rouletteBgColors = ['aqua', 'blue', 'brown', 'blueviolet', 'chartreuse', 'chocolate', 'cornflowerblue', 'darkgoldenrod', 'deeppink', 'darkgray', 'mediumpurple', 'mediumspringgreen', 'cadetblue', 'yellow', 'springgreen', 'seagreen', 'tomato', 'olive', 'gold', 'red', 'fuchsia', 'greenyellow', 'saddlebrown', 'salmon']