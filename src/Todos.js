import React, { useState } from 'react'

const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}


function Todos({ todos, deleteTodo, completeTodo }) {

    const [priority, setPriority] = useState('')

    console.log(typeof (priority));

    const handlePriorityChange = (e) => {
        console.log(typeof (e.target.value));
        setPriority(e.target.value)
        console.log(e.target.value);
    }


    let todoList = todos.map(todo => {
        return (
            <li className="collection-item" style={itemStyle} key={todo.id}>
                {todo.content}
                <div className="btn-group">
                    <input type="number" value={priority} min={0} max={5} onChange={handlePriorityChange} />
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