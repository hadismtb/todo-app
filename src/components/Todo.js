import React from 'react';

const Todo = ({item, dispatch}) => {
    const {text} = item;
    return (
        <div className='col-6 mb-2'>
            <div className='d-flex justify-content-between align-items-center border border-light border-rounded p-3'>
                <div>{text}</div>
                <div>
                    <button type="button" class="btn btn-sm btn-success" onClick={() => dispatch({type: "TOGGLE", payload: item})}>done</button>
                    <button type="button" class="btn btn-sm btn-info mx-1 text-white">edit</button>
                    <button type="button" class="btn btn-sm btn-danger" onClick={() => dispatch({type: "DELETE", payload: item})}>delete</button>
                </div>
        </div>
        </div>
    );
};

export default Todo;