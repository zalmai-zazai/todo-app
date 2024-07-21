import React, { useState } from 'react';
import ToDoList from './ToDoList';
import style from './Form.module.css';

const Form = ({ toDoList, setTodoList }) => {
  // const [toDo, setTodo] = useState('');
  const [toDo, setTodo] = useState({ name: '', done: false });

  function handelForm(e) {
    e.preventDefault();
  }
  function handelAdd() {
    toDo === '' ? alert('Enter a value') : setTodoList([...toDoList, toDo]);
    setTodo({ name: '', done: false });
  }

  return (
    <div className={style.todo}>
      <form className={style.todForm} onSubmit={handelForm}>
        <input
          className={style.moderInput}
          type="text"
          placeholder="Enter your task"
          value={toDo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={style.moderButton} onClick={handelAdd}>
          Add
        </button>
      </form>

      <ToDoList toDoList={toDoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Form;
