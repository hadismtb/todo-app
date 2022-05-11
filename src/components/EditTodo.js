import React, { useState } from 'react';

const EditTodo = ({item, dispatch}) => {

    const {key, text} = item;

    const [input, setInput] = useState(text);

    const changeHandler = e => {
        const target = e.target;
        setInput(target.value)
    }

    return (
        <div div className='d-flex justify-content-between align-items-center border border-light border-rounded p-3'>
            <div>
                <input className='form-control'  value={input} onChange={changeHandler}/>
            </div>
            <div>
                    <button type="button" className="btn btn-sm btn-info mx-1 text-white" onClick={() => dispatch({type: "EDIT", payload: item})}>save</button>
                    <button type='button' className="btn btn-sm btn-secondary text-white" onClick={() => dispatch({type: "STATUS"})}>cancel</button>
            </div>
        </div>
    );
};

export default EditTodo;