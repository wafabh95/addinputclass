import React, { Component } from "react";
import PropTypes from "prop-types";


class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList:
      [{texte: "",
      isDone: false,}]
    };
  }

  handleChange = (e) => {
    this.setState({
       todoList:([{texte:e.target.value}]) });
  };
  handleAddInput = ()=>{
    this.props.handleAdd(this.state.todoList)
    }
  render(props) {

    return (
      <div>
        <input type="text" name="texte" onChange={this.handleChange}></input>
        <button onClick={this.handleAddInput}>add</button>
        {/* {this.state.todoList.map(elm=>elm.texte)} */}
        
      </div>
    );
  }
}

export default componentName;
