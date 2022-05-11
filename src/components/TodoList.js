import React, { useState, useContext } from 'react';

// COMPONENTS
import Todo from './Todo';

// CONTEXT
import { TodosContext } from '../context/TodosContextProvider';

const TodoList = () => {
    const [status, setStatus] = useState(false)

    const {state, dispatch} = useContext(TodosContext);
    const {todos} = state;

    const filteredTodos = todos.filter(item => item.isDone === status);

    const listLength = boolean => {
        const length = todos.filter(item => item.isDone === boolean).length;
        return length;
    }

    return (
        <div className='todoList mt-4'>
            <div className='container'>
                <div className='d-flex flex-column align-items-center'>
                    <nav className='col-6 mb-3'>
                        <div className='nav nav-tabs' id='tab-nav' role="tablist">
                            <a className="nav-item nav-link font-weight-bold" id="nav-home-tab" onClick={() => setStatus(false)}>undone<span className='badge bg-warning rounded mx-1'>{listLength(false)}</span ></a>
                            <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab" onClick={() => setStatus(true)}>done<span className='badge bg-success rounded mx-1'>{listLength(true)}</span ></a>
                        </div>
                    </nav>
                    {
                        filteredTodos.length ?
                            filteredTodos.map(item => <Todo key={item.key} item={item} dispatch={dispatch}/>):
                            <p>There isn't any todo!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoList;