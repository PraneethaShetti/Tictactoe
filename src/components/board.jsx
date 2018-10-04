import React, { Component } from 'react';
import Square from './square';
import { Col } from "react-bootstrap";
import './css/style.css'

class Board extends Component {

    renderSquare(i){
        return <Square value={this.props.squares[i]} click={()=>this.props.onSquareClick(i)}></Square>
    }
    render() {
        return (
            <div>
                <Col xs={12} xsOffset={2} smOffset={5} mdOffset={5}>
                    <div className="table">
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
                    </div>
                </Col>
            </div>
        );
    }
}

export default Board;
