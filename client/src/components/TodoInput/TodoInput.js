import React, { Fragment, useState } from "react";

const TodoInput = () => {
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

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
        const body={name, description,todo_date};
        const response=await fetch('http://localhost:5000/todos',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(body)
        });
        // console.log(response);
        window.location='/';
    } catch (err) {
        console.error(err.message)
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN Todo</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter name"
          id="todoName"
          onChange={onNameChange}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Enter task"
          id="todoTask"
          onChange={onTaskChange}
        />
        <input
          className="form-control"
          type="date"
          id="TodoDate"
          onChange={onDateChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default TodoInput;
