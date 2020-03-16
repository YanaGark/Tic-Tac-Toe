import React from 'react';
import './index.css';
import Square from './Square.js';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ReturnButton =  withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: '10px',
      marginBottom: '10px',
      marginLeft: '67px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  })(Button);

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: false,
            moves: 0,
            disabled: Array(9).fill(false),
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        const dis = this.state.disabled.slice();
        if(calcWin(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'O' : 'X';
        dis[i] = true;
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            moves: this.state.moves + 1,
            disabled: dis,
        });
      }
    renderSquare(i){
        return ( <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        disabled = {this.state.disabled[i]}
      />);
    }
    render() {
        const win = calcWin(this.state.squares);
        const tie = tieGame(this.state.moves);
        let status;
        if(win){
            status = "Winner: " + win;
        }
        else if(tie){
            status = tie;
        }
        else{
            status = 'Next player: ' + (this.state.xIsNext ? 'O' : 'X');
        }

        return(
            <div>
                <div className="title">Tic Tac Toe</div>
                <div className="row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

                <div className="status">{status} </div>

                <ReturnButton variant="contained" color="primary" onClick={() => window.location.reload(false)}>restart game</ReturnButton>
            </div>
        );
    }
}


function tieGame(moves){
    if (moves === 9){
        return "Tie Game";
    }

    return null;
}

function calcWin(squares){
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i = 0; i < wins.length; i++){
        const[a,b,c] = wins[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}



export default Board;