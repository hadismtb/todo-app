import React, { createContext, useReducer } from 'react';

const initialState = {
    todos: [],
    edditingStatus: false
}

const todosReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "ADD":
            state.todos.push(payload);
            return {
                ...state,
                todos: [...state.todos]
            }
        case "DELETE":
            const newTodos = state.todos.filter(item => item.key !== payload.key);
            return {
                ...state,
                todos: [...newTodos]
            }
        case "TOGGLE":
            const indexT = state.todos.findIndex(item => item.key === payload.key);
            state.todos[indexT].isDone = !state.todos[indexT].isDone;
            return {
                ...state
            }    
        case "EDIT":
            const indexE = state.todos.findIndex(item => item.key === payload.key);
            state.todos[indexE].text = payload.text;
            return {
                ...state
            }
        case "STATUS":
            return {
                ...state,
                edditingStatus : !state.edditingStatus
            } 
        default:
            return state               
    }
}

// CONTEXT
export const TodosContext = createContext();

const TodoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(todosReducer, initialState);

    return (
        <TodosContext.Provider value={{state, dispatch}}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodoContextProvider;