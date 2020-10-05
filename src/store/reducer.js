const initState = {
    todos: [
        {
            id: 1,
            content: "Go to market",
            completed: false
        },
        {
            id: 2,
            content: "Buy some milk",
            completed: false
        }
    ]
}

const reducer = (state = initState, action) => {
    if (action.type === 'ADD_TODO') {
        return {
            todos: [...state.todos, action.data]
        }
    }
    if (action.type === 'DELETE_TODO') {
        // console.log(action.itemId);
        const newTodos = state.todos.filter(item => {
            return item.id !== action.itemId
        })
        // console.log(newTodos);
        return {
            todos: newTodos
        }
    }
    if (action.type === 'COMPLETE_TODO') {
        const newTodos = state.todos.find( todo => { 
            return todo.id === action.id
        })
        newTodos.completed = true
        const updateTodos = [
            ...state.todos,
        ]
        console.log(updateTodos);
        return {
            todos: updateTodos
        }
        // newTodos.completed = true
    }
    return state
}

export default reducer