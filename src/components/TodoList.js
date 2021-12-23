import React from 'react'

import { Table,Button } from 'react-bootstrap';
function TodoList({listToDos,setListToDos,setTodo,setUpdate,}) {
    const deleteToDo = (todo)=>{
        let updateArray = listToDos.filter((val)=>val !== todo);
        console.log(updateArray);
        setListToDos(updateArray);
    }
    const updateToDo = (index,todo)=>{
        setTodo(todo);
        setUpdate(index + 1);
    }
    return (
        <Table striped bordered hover id='table' className='container' style={{marginTop:'20px'}}>
            <thead>
                     <tr>
                         <th>Sr no.</th>
                        <th>Task</th>
                        <th>Action</th>
                     </tr>
                </thead>
                 <tbody>
            {listToDos.map((todo,index)=>{
                return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td className='todos'>{todo}</td>
                        <td>
                        <button variant="success"  className='update btn btn-warning' onClick={()=>updateToDo(index,todo)}>Update</button>{' '}
                        <button variant="danger" className='delete btn btn-danger' onClick={()=>deleteToDo(todo)}>Delete</button>
                       </td>
                    </tr>
                )
            })}
            </tbody>

    
</Table>
   
      
    )
}

export default TodoList