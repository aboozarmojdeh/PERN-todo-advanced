import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';

function App() {
  return (
    <Fragment>
    <div className="container m-5">
      <TodoInput />
    </div>
    </Fragment>
  );
}

export default App;
