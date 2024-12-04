export const addTodo = (todo) => {
    return {
        type: 'todo/add',
        payload: todo
    }
}
export const deleteTodo = (index) => {
    return {
        type: 'todo/delete',
        payload: index
    }
}
export const completedTodo = (index) => {
    return {
        type: 'todo/completed',
        payload: index
    }
}