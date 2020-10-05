import React, { useState } from 'react'
import { connect } from 'react-redux'

const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}


const Todos = ({ todos, deleteTodo, completeTodo }) => {

    const [priority, setPriority] = useState(0)

    // console.log(typeof (priority));

    // const handlePriorityChange = (e) => {
    //     console.log(typeof (e.target.value));
    //     setPriority(e.target.value)
    //     console.log(e.target.value);
    // }


    let todoList = todos.map(todo => {
        return (
            <li className="collection-item" style={itemStyle} key={todo.id}>
                {todo.completed ? <span className="completed">{todo.content}</span> : todo.content}
                <div className="btn-group">
                    <input type="text" value={priority} min={0} max={5} onChange={event => setPriority(event.target.value)} />
                    <button className="waves-effect waves-light btn blue" onClick={() => completeTodo(todo.id)}>Complete</button>
                    <button className="waves-effect waves-light btn red" onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                </div>

            </li>
        )
    })
    return (
        <div className="todos collection">
            { todoList}
        </div>
    )
}

export default Todos