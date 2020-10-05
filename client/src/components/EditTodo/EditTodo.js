import React, { Fragment,useState } from "react";

const EditTodo = ({todo}) => {




    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [todo_date, setDate] = useState("");


    const onNameChange = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
      };
    
      const onTaskChange = (event) => {
        // console.log(event.target.value);
        setDescription(event.target.value);
      };
    
      const onDateChange = (event) => {
        // console.log(event.target.value);
        setDate(event.target.value);
      };

const updateTodo=async (id)=>{
try {
    const body={name,description,todo_date};
    const response=await fetch(`http://localhost:5000/todos/${id}`,{
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(body)
    });
console.log(response)
window.location='/';
} catch (err) {
    console.error(err.message)
}
};

  return (
    <Fragment>
    
<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}
onClick={
    ()=>{
        setName(todo.name)
        setDescription(todo.description)
        setDate(todo.todo_date)
    }
  
}
>
  Edit
</button>


<div className="modal" id={`id${todo.todo_id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-header">
        <h4 className="modal-title">Edit Task</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

     
      <div className="modal-body">
      <input
          className="form-control"
          type="text"
          placeholder="Edit name"
          value={name}
          onChange={onNameChange}
        />
        <br />
        <input
          className="form-control"
          type="text"
          placeholder="Edit task"
          value={description}
          onChange={onTaskChange}
        />
        <br />
        <input
          className="form-control"
          type="date"
          value={todo_date}
          
          onChange={onDateChange}
        />
      </div>

     
      <div className="modal-footer">
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>updateTodo(todo.todo_id)}>Save</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  );
};

export default EditTodo;
