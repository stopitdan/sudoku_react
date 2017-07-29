import React from 'react';

class Sudoku extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        likesCount : 0
    };

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
