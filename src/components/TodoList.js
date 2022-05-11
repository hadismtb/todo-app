import React, { useState, useContext } from 'react';

// COMPONENTS
import Todo from './Todo';

// CONTEXT
import { TodosContext } from '../context/TodosContextProvider';

const TodoList = () => {
    const {state, dispatch} = useContext(TodosContext);
    const {todos} = state;

    return (
        <div className='todoList mt-4'>
            <div className='container'>
                <div className='d-flex flex-column align-items-center'>
                    <nav className='col-6 mb-3'>
                        <div className='nav nav-tabs' id='tab-nav' role="tablist">
                            <a className="nav-item nav-link font-weight-bold" id="nav-home-tab">undone<span className='badge bg-warning rounded mx-1'>0</span ></a>
                            <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done<span className='badge bg-success rounded mx-1'>0</span ></a>
                        </div>
                    </nav>
                    {
                        todos.length ?
                            todos.map(item => <Todo key={item.key} item={item} dispatch={dispatch}/>):
                            <p>There isn't any todo!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoList;