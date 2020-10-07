import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todos from './Todos';
import AddTodo from './AddTodo';
import Completed from './Components/Completed';
import './assets/scss/styles.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
    // console.log(id)
    this.props.onCompleteTodo(id)
  }

  render() {
    return (
      <Router>
        <div className="App container">
          <div className="navbar">
            <h2 className="center">Todos</h2>
            <ul className="nav">
              <li><Link to="/">All</Link></li>
              <li><Link to="/completed">Complete Tasks</Link></li>
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          </div>
          <Switch>
            <Route path='/' exact>
              <Todos
                todos={this.props.todos}
                deleteTodo={this.deleteTodo}
                completeTodo={this.completeTodo}
              />
            </Route>
            <Route path="/completed" component={Completed} />
          </Switch>

          <AddTodo addTodo={this.addTodo} />
        </div>
      </Router>
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
    onDeleteTodo: (itemId) => dispatch({ type: 'DELETE_TODO', itemId: itemId }),
    onCompleteTodo: (id) => dispatch({ type: 'COMPLETE_TODO', id: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
