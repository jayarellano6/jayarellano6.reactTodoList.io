import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

  

  getStyle = () => {
    return{
      padding: '.4rem',
      borderBottom: '.1rem #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: this.props.todo.completed ? '#adffbb' : '#f4f4f4'
    }
  }

  render() {
    const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} style={{marginRight: '.4rem'}}/>
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '4px 7.5px',
  borderRadius: '50%',
  marginLeft: '.4rem',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
