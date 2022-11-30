const MineBoard = () => {
  let boardData = {
    rows: 5,
    columns: 5,
    flags: 5,
    mines: 5,
  };

  const createBoard = () => {
    let board: any[] = [];

    for (let i = 0; i < boardData.rows; i++) {
      board.push([]);
      for (let j = 0; j < boardData.columns; j++) {
        board[i].push({
          x: j,
          y: i,
          count: 0,
          isOpen: false,
          hasMine: false,
          hasFlag: false,
        });
      }
    }

    for (let i = 0; i < boardData.mines; i++) {
      let randomRow = Math.floor(Math.random() * boardData.rows);
      let randomCol = Math.floor(Math.random() * boardData.columns);

      let cell = board[randomRow][randomCol];

      if (cell.hasMine) {
        i--;
      } else {
        cell.hasMine = true;
      }
    }
    console.table(board)
    return board;
  };

  createBoard();

  return (
    <div>
      
    </div>
  );
};

export default MineBoard;
