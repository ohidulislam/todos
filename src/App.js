import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todos from './Todos';
import AddTodo from './AddTodo';
import './assets/scss/styles.scss'

class App extends Component {

  addTodo = (todo) => {
    let todoId = Math.floor(Math.random() * 100)
    this.props.onAddTodo({ id: todoId, content: todo })
  }

  deleteTodo = (id) => {
    console.log(id)
    this.props.onDeleteTodo(id)
  }

  completeTodo = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App container">
        <div className="navbar">
          <h2 className="center">Todos</h2>
          <ul className="nav">
            <li><a href="#">Complete Tasks</a></li>
            <li><a href="#">Reports</a></li>
          </ul>
        </div>
        <Todos
          todos={this.props.todos}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (data) => dispatch({ type: 'ADD_TODO', data: data }),
    onDeleteTodo: (itemId) => dispatch({ type: 'DELETE_TODO', itemId: itemId })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
