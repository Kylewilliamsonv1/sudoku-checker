import { Sudoku } from "../src/sudoku.js";


describe('Sudoku', () => {
  let testSudoku = [];

  beforeEach(() => {
    let row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let row2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
    let row3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
    let row4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
    let row5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
    let row6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
    let row7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
    let row8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
    let row9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
  
    testSudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);
  });

  test('The Sudoku should have nine rows', () => {
    expect(testSudoku.rowCheck()).toEqual(9);
  });

  test('Each row should have nine numbers', () => {
    expect(testSudoku.rowNumCount()).toEqual(true);
  });
  
  // test("each row does not contain a duplicate")
});

