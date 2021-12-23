import React from 'react'
import { Card ,Form,Row,Col} from 'react-bootstrap'

import PropTypes from 'prop-types';
function Input({initialToDo,onSubmitToDo,setTodo,
    update,listToDos,setListToDos,setUpdate}) {
    let userTodovalue=React.createRef();
    const handleInput=(e)=>{
        const currentValue=e.target.value;
        setTodo(currentValue)
    }
    const submitToDo=(e)=>{
        e.preventDefault();
        onSubmitToDo(initialToDo)
        setTodo('');
    }
    const updateToDo=(e)=>{
        e.preventDefault();
        let arr = listToDos;
        arr[update - 1] = initialToDo;
        setListToDos(arr);
        setUpdate(0);
        setTodo('');
    }
    return (
        <div>
            <h2>TodoForm</h2>
            <form className='form ' onSubmit={submitToDo} style={{border:'1px solid black',marginTop:'2px'}}> 
        
            <input type='text' className="inputField form-control container"   value={initialToDo}  placeholder='Enter Task' style={{marginTop:'15px'}}
            name='searchField' ref={userTodovalue} onChange={handleInput}/>
            {''}
            <br/>
            {update ? (
                <button type='update' onClick={updateToDo} className='mainupdate btn btn-warning'  style={{marginBottom:'5px'}}>Update</button>
            ) : (
                <button  className='submitbutton btn btn-primary' style={{marginBottom:'5px'}}>Submit</button>
            )}
            </form>
                     
        </div>
    )
}
Input.protoTypes={
    initialToDo: PropTypes.string,
    onSubmitToDo: PropTypes.func,
    setTodo: PropTypes.func
}
export default Input
