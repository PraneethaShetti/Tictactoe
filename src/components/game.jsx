import React, { Component } from 'react';
import Board from './board';
import { Col } from "react-bootstrap";
import './css/style.css';

class Game extends Component {
    constructor(props){
        super(props);
        this.state={
           history:[{
               squares: Array(9).fill(null)
           }],
           stepNumber:0,
           isXNext: true
        }
    }

    onSquareClick(i){
        var history = this.state.history.slice(0,this.state.stepNumber+1);
        var currentState= history[this.state.stepNumber];
        var newSquare= currentState.squares.slice();
        if(newSquare[i]){
            return;
        }else if (this.calculateWinner(currentState.squares)) {
            return;
        }
        newSquare[i]=this.state.isXNext===true?'X':'O';
        this.setState({
            history: history.concat([{
                squares: newSquare
            }]),
            isXNext:!this.state.isXNext,
            stepNumber: history.length,
        })
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    showHistoryMover(index){
        this.setState({
            stepNumber:index,
            isXNext:(index%2===0)?true:false
        })
    }

    render() {
        var history = this.state.history;
        var currentState= history[this.state.stepNumber];
        var winner=this.calculateWinner(currentState.squares);
        var textToShow;
        var hist=history.map((squareArray, index)=>{
            var historyDesc = index? "Jump to Step:"+ index : "Reset";
            if(index>this.state.stepNumber){
                return;
            }
                return (
                    <li key={index}>
                        <button onClick={()=>this.showHistoryMover(index)} >{historyDesc}</button>
                    </li>
                )
            
        })
        if(winner){
            textToShow= <h2 className="Winner"><h1>Congratulations..!!!!</h1>{winner} Won the game</h2>
        }else if(this.state.stepNumber === 9){
            textToShow = <h1 className="looser">Sorry..!!! Better luck next time.</h1>
        }else{
            textToShow=<h1>{this.state.isXNext?'X':'O'} will play next</h1>
        }
        return (
           <div className="backgndImg">
                <div className="gameComments">{textToShow}</div>
                <Board squares={currentState.squares} onSquareClick={(i)=> this.onSquareClick(i)} />
                <Col xs={12} smOffset={4} mdOffset={4}>
                    <div className="history">
                        <ul className="actionSteps">{hist}</ul>
                    </div>
                </Col>  
            </div>
        );
    }
}

export default Game;
