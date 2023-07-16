export class Connect4 {
  grid: number[][];
  currentPlayer: number;
  isGameOver: boolean;

  constructor() {
    // Good luck
    //creates a 2D array with 6 rows and 7 columns, where each element is initialized with the value 0.
    this.grid = [];

    // Initialize the grid with 6 rows and 7 columns filled with zeros.
    for (let row = 0; row < 6; row++) {
      this.grid[row] = [];
      for (let col = 0; col < 7; col++) {
        this.grid[row][col] = 0;
      }
    }
    this.currentPlayer = 2;
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
      return "Column full!";
    }

    this.dropDisc(col);

    if (this.checkForWin()) {
      this.isGameOver = true;
      return `Player ${this.currentPlayer === 1 ? 2 : 1} wins!`;
    }

    const currentPlayer = this.currentPlayer;
    this.switchPlayers();

    return `Player ${this.currentPlayer} has a turn`;
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

  switchPlayers(): void {
    // switch the player between 1 and 2
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  checkForWin(): boolean {
    //Check for a win by checking horizontally, vertically and diagonally.
    return (
      this.checkHorizontalWin() ||
      this.checkVerticalWin() ||
      this.checkDiagonalUpWin() ||
      this.checkDiagonalDownWin()
    );
  }

  //Methods for checking win conditions

  checkHorizontalWin(): boolean {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          this.grid[row][col] === this.currentPlayer &&
          this.grid[row][col + 1] === this.currentPlayer &&
          this.grid[row][col + 2] === this.currentPlayer &&
          this.grid[row][col + 3] === this.currentPlayer
        ) {
          return true;
        }
      }
    }
    return false;
  }

  checkVerticalWin(): boolean {
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 3; row++) {
        if (
          this.grid[row][col] === this.currentPlayer &&
          this.grid[row + 1][col] === this.currentPlayer &&
          this.grid[row + 2][col] === this.currentPlayer &&
          this.grid[row + 3][col] === this.currentPlayer
        ) {
          return true;
        }
      }
    }
    return false;
  }
  checkDiagonalUpWin(): boolean {
    // Check for a diagonal line (upward) of four discs.
    for (let row = 3; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          this.grid[row][col] === this.currentPlayer &&
          this.grid[row - 1][col + 1] === this.currentPlayer &&
          this.grid[row - 2][col + 2] === this.currentPlayer &&
          this.grid[row - 3][col + 3] === this.currentPlayer
        ) {
          return true;
        }
      }
    }
    return false;
  }

  checkDiagonalDownWin(): boolean {
    // Check for a diagonal line (downward) of four discs.
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          this.grid[row][col] === this.currentPlayer &&
          this.grid[row + 1][col + 1] === this.currentPlayer &&
          this.grid[row + 2][col + 2] === this.currentPlayer &&
          this.grid[row + 3][col + 3] === this.currentPlayer
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
