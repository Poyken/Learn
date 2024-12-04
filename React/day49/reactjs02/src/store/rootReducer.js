export const initialState = {
    todoList: [],
}
export const rootReducer = (state, action) => {
    switch (action.type) {
        case 'todo/add':
            return { ...state, todoList: [...state.todoList, action.payload] }
        case 'todo/delete':
            return { ...state, todoList: state.todoList.filter((_, index) => index !== action.payload) }
        case 'todo/completed':
            return {
                ...state,
                todoList: state.todoList.map((todo, index) => index === action.payload ? { ...todo, completed: !todo.completed } : todo)
            }
        default:
            return state
    }
}