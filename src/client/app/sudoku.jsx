import React from 'react';

class Sudoku extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        grid : [
            [{value: ''},{value: ''},{value: ''}],
            [{value: ''},{value: ''},{value: ''}],
            [{value: ''},{value: ''},{value: ''}]
        ]
    };
    this.generateBoard = this.generateBoard.bind(this);
    this.placeBoard = this.placeBoard.bind(this);
    this.randomStartingPosition = this.randomStartingPosition.bind(this);
  }

  generateBoard(){
      let board = this.state.grid;
      let startingValues = [1,2,3];
      let startingLength = startingValues.length
      for(var i = 0; i < startingLength; i++){
          let randomStart = this.randomStartingPosition();
          let boardVal = board[randomStart[0]][randomStart[1]].value
          if(!boardVal){
              board[randomStart[0]][randomStart[1]].value = startingValues[i];
          } else {
              i--
          }
      }

      this.setState({
          board : board
      })
  }

  collision(){

  }

  placeBoard() {
      return (
          this.state.grid.map((row, index)=>{
              return row.map((cell, index)=>{
                  return (
                      <div style={{height:'100px', width:'100px', display:'inline-block', border:'1px solid black'}}>
                        {cell.value}
                      </div>
                  )
              })
          })
      )
  }

  randomStartingPosition() {
      let array = [];
      let index = Math.floor(Math.Random() * 3)
      let position = Math.floor(Math.Random() * 3)

      array.push(index, position);
      return array;
  }

  render() {
    return (
      <div>
        This is Sudoku!
        <div style={{width:'306px', height:'306px'}}>
        {this.placeBoard()}
        </div>
        <button onClick={()=>{
            this.generateBoard();
        }}>
            Fill The Board!
        </button>


      </div>
    );
  }

}

export default Sudoku;
