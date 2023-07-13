export class Connect4 {
  grid: number[][];
  currentPlayer: number;
  isGameOver: boolean;

  constructor() {
    // Good luck
    //creates a 2D array with 6 rows and 7 columns, where each element is initialized with the value 0.
    this.grid = Array.from({ length: 6 }, () => Array(7).fill(0));
    this.currentPlayer = 1;
    this.isGameOver = false;
  }

  play(col: number): string {
    // Good luck
    if (this.isGameOver) {
      return "Game has finished!";
    }

    if (col < 0 || col > 6) {
      return "Invalid column! Choose a column between 0 and 6.";
    }

    if (this.isColumnFull(col)) {
      return "Column full! Choose another column.";
    }

    this.dropDisc(col);

    if (this.checkForWin()) {
      this.isGameOver = true;
      return `Player ${this.currentPlayer} wins!`;
    }

    this.switchPlayers();

    return `Player ${this.currentPlayer} has a turn.`;
  }

  isColumnFull(col: number): boolean {
    // Check if the topmost row in the selected column is occupied.
    return this.grid[0][col] !== 0;
  }

  dropDisc(col: number): void {
    //Find the next available row in the selected column ti place the disc.
    let row = 5;
    while (this.grid[row][col] !== 0) {
      row--;
    }
    //place the current player's disc in the selected column
    this.grid[row][col] = this.currentPlayer;
  }
}
