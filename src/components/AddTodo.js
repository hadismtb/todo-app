import React from 'react';

const AddTodo = () => {
    return (
        <div className='d-flex justify-content-center bg-light pt-5 pb-5'>
            <form className='form-inline'>
                 <div className='form-group d-flex'>
                     <input className='form-control mx-sm-3' type="text" placeholder="I want to do..."/>
                     <button type='submit' className='btn btn-primary'>Add</button>
                 </div>
            </form>
        </div>
    );
};

export default AddTodo;