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
        const updatedTodos = [
            ...state.todos,
        ]

        for (let item of updatedTodos) {
            if (item.id === action.id) {
                item.completed = true
                console.log(item);
            }
        }

        // console.log(uparr);
        // console.log(state.todos);
        return {
            todos: updatedTodos
        }


        // const newTodos = state.todos.find(todo => {
        //     return todo.id === action.id
        // })
        // newTodos.completed = true
        // const updateTodos = [
        //     ...state.todos,
        // ]
        // console.log(newTodos);
        // console.log(state.todos);
        // return {
        //     todos: updateTodos
        // }
        // newTodos.completed = true
    }
    if (action.type === 'SET_PRIORITY') {
        console.log(action.value)
    }
    return state
}

export default reducer