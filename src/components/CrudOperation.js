import React, { useState, useRef } from 'react'

import { Card ,Form,Row,Col} from 'react-bootstrap'
export default function CrudOperation() {
    const [state, setState] = useState({ todo: [{ tit: "mango" ,desc:'yellow '}] });
    let titleRef = useRef(null);
    let descRef = useRef(null);
    const add = (events) => {
        events.preventDefault();
        let title = { title: titleRef.current.value }
        let description = { description: descRef.current.value }
        setState({ todo: [...state.todo, { tit: title.title ,desc:description.description}] });
        console.log(state.todo)
        document.getElementById('title').value = "";
        document.getElementById('desc').value = "";

    }
 
    const del = (id) => {

        const old = [...state.todo];
        const todo = old.filter((element, i) => {
            return i !== id
        })
        setState({ todo: todo })
        console.log(todo)

    }


    const update = (id ,tit,desc) => {
        document.getElementById('title').value = tit;
        document.getElementById('desc').value = desc;
        del(id);
        
    }
    return (
        <div>
                      <Card className="container" style={{marginTop:'70px'}}>
 
 <Card.Body>
   <Card.Title>Crud Operation</Card.Title>
   <Card.Text>
   <Form onSubmit={add} className='form'>
 <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
   <Form.Label column sm="2">
     Title
   </Form.Label>
   <Col sm="10">
     <Form.Control type="text" name='searchField' className='inputField' placeholder='Enter Title' name="title"  id="title" ref={titleRef}   required/>
   </Col>
  
 </Form.Group>
  

 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
   <Form.Label column sm="2">
     Description
   </Form.Label>
   <Col sm="10">
     <Form.Control type="text"   placeholder="Enter Description" name="desc"  id="desc"  ref={descRef} required />
   </Col>
 </Form.Group>

            <button className='button btn btn-primary'  type='submit'>submit</button>
 
</Form>
   </Card.Text>
 
 </Card.Body>
 

</Card>
<div className=" col-lg-6 data bg-white m-auto">
                    <h3 className="mt-2 p-2 text-white">To-Do List</h3>
                    <table className=" text-center table mt-5" id='table' >
                        <thead>
                            
                            <tr>
                                <th>Sr.No.</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                            state.todo.map((item,id)=>
                        <tr key={id}>
            <td>{id+1}</td>
            <td>{item.tit}</td>
            <td>{item.desc}</td>
            <td>
                <button className=" dbutton btn btn-danger" onClick={() => { del(id) }}  >Delete</button> &nbsp;
                <button  className="btn btn-warning text-white"onClick={() => { update(id, item.tit,item.desc) }}>Update</button>
               
            </td>
        </tr>
                            )}     
                        </tbody>
                    </table>
                </div>
        </div>
    )
}
// data.splice(index, 1);
// setData(data)