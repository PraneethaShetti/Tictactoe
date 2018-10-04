import React, { Component } from "react";

class Praneetha extends Component {

  constructor(props){
    super(props);
    this.state={
      text:props.children
    }
    console.log(this.state)
  }

  change(e){
    this.setState({text: e.target.value});
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <input value={this.state.text} onChange={this.change.bind(this)}/>
      </div>
    );
  }
}


export default Praneetha;
