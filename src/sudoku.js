export function Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.row4 = row4;
  this.row5 = row5;
  this.row6 = row6;
  this.row7 = row7;
  this.row8 = row8;
  this.row9 = row9;
};

Sudoku.prototype.buildGrid = function () {
  return [this.row1,this.row2,this.row3,this.row4,this.row5,this.row6,this.row7,this.row8, this.row9];
}

Sudoku.prototype.rowCheck = function () {
  const sudokuGrid = this.buildGrid();
  return sudokuGrid.length;
};

Sudoku.prototype.rowNumCount = function () {
  const sudokuGrid = this.buildGrid();
  for (let i = 0; i < sudokuGrid.length; i++) {
    if (sudokuGrid[i].length !=9) {
      return false;
    } else {
      return true;
    };
  };
};

// Sudoku.prototype.dupNum = function () {
//   const sudokuGrid = this.buildGrid();
//   var = []
  
// implement forEach loop to build array; check array for dups.
//     for (let i = 0; i <= 8; i++){
//       if (sudokuGrid[i].includes(i+1)

//     }
// }