import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListTodo extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
       
        {this.props.todoList.map(elm=>
          <h2>{elm.texte}</h2>
          
          )}

     
      </div>
    )
  }
}


export default ListTodo