import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <Fragment>
    <div className="container m-5">
      <TodoInput />
      <TodoList />
    </div>
    </Fragment>
  );
}

export default App;
