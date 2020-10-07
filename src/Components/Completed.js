import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Todos from '../Todos'

const Completed = props => {

    // console.log(props.completeTodos);
    let compTodos = []
    props.completeTodos.map(todo => {
        return todo.completed ? compTodos.push(todo) : null
    })

    console.log(compTodos);

    return (
        <>
            {
                compTodos.map(todo => {
                    return (
                        <Todos
                            todos={compTodos}
                        />
                    )
                })
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        completeTodos: state.todos
    }
}

export default connect(mapStateToProps)(Completed)