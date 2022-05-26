import React, { Component } from "react";
import AddInput from './components/AddInput'
import './App.css'

import ListTodo from "./components/ListTodo";
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList:[{
        texte: "",
      isDone: false
    }]
      
    };
  }
  handleChange = (e) => {
    this.setState({ texte: e.target.value });
  };

  handleAdd = (val)=>{
  this.setState({
    todoList:this.state.todoList.concat(val)})
  }
  render() {
    return (
      <div className="App-header">
       <AddInput handleAdd={this.handleAdd}/>
       <ListTodo todoList={this.state.todoList} />
      </div>
    );
  }
}

export default componentName;
