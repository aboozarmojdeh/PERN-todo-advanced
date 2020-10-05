import React, { Fragment, useState, useEffect } from "react";
import EditTodo from '../EditTodo/EditTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const allTodos = await response.json();
    // console.log(allTodos);
    setTodos(allTodos);
  };

  const deletTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    //   console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  const renderedTodos = todos.map((todo) => {
    return (
      <tr key={todo.todo_id}>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td>{todo.todo_date.toString().slice(0,10)}</td>
        <td>
          <EditTodo todo={todo}/>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deletTodo(todo.todo_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  useEffect(() => {
    // console.log("hi");
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Task</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderedTodos}</tbody>
      </table>
    </Fragment>
  );
};

export default TodoList;
