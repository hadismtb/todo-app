import React, { useState,useContext } from 'react';

// CONTEXT
import { TodosContext } from '../context/TodosContextProvider';

const AddTodo = () => {
    const {state, dispatch} = useContext(TodosContext);

    const [input, setInput] = useState("");

    const [todo, setTodo] = useState({})

    const inputHandler = e => {
        const target = e.target;
        setInput(target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        if(input.trim()){
            // setTodo({
            //     key: Date.now(),
            //     text: input,
            //     isDone: false
            // })
            dispatch({type: "ADD", payload: {
                key: Date.now(),
                text: input,
                isDone: false
            }});
            setInput("");
        }
    }

    return (
        <div className='d-flex justify-content-center bg-light pt-5 pb-5'>
            <form className='form-inline' onSubmit={submitHandler}>
                 <div className='form-group d-flex'>
                     <input className='form-control mx-sm-3' type="text" placeholder="I want to do..." value={input} onChange={inputHandler}/>
                     <button type='submit' className='btn btn-primary'>Add</button>
                 </div>
            </form>
        </div>
    );
};

export default AddTodo;