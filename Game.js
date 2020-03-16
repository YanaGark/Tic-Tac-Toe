import React from 'react';
import './index.css';
import Board from './Board.js'

class Game extends React.Component{
    render(){
        return(
            <div className="game">
                <div className="board">
                    <Board />
                </div>
            </div>
        );
    }
}


export default Game;
