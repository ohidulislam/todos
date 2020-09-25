const initState = {
    todos: [
        { id: 1, content: "Go to market" },
        { id: 2, content: "Buy some milk" }
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
    return state
}

export default reducer