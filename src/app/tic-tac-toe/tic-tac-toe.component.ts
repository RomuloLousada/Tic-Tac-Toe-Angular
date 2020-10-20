import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string;
  winner: string;
  board: string[][];

  constructor() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

  resetBoard() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

  swapPlayer() {
    this.currentPlayer = this.currentPlayer == 'O' ? 'X' : 'O';
  }

  play(x: number, y: number) {
    if (this.board[x][y] == '' && this.winner == '') {
      this.board[x][y] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      } else {
        this.swapPlayer();
      }
    }
  }

  checkWinner(player: string): boolean {
    //Line Check
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }

    //Column Check
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }

    //Diagonal Checks
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true;
    }

    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true;
    }

    return false;
  }

}
