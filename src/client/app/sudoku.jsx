import React from 'react';

class Sudoku extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        grid : [
            [{},{},{}],
            [{},{},{}],
            [{},{},{}]
        ]
    };
  }

  generateBoard(){
      let board = this.state.grid;
      let startingValues = [1,2,3];
      let startingLength = startingValues.length
      for(var i = 0; i < startingLength; i++){
          let randomStart = randomStartingPosition();
          let boardVal = board[randomStart[0]][randomStart[1]].value
          if(!boardVal){
              boardVal = startingValues[i];
          } else {
              i--
          }
      }
  }

  collision(){

  }

  randomStartingPosition() {
      let array = [];
      let index = Math.floor(Math.Random() * 3 + 1)
      let position = Math.floor(Math.Random() * 3 + 1)

      array.push(index, position);
      return array;
  }

  render() {
    return (
      <div>
        This is Sudoku!
      </div>
    );
  }

}

export default Sudoku;
