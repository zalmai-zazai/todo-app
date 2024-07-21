import React from 'react';
import Todo from './Todo';
import style from './ToDoList.module.css';
const ToDoList = ({ toDoList, setTodoList }) => {
  const sortedTodos = toDoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <ul>
      {sortedTodos.map((todo) => (
        <Todo
          key={todo.name}
          todo={todo}
          toDoList={toDoList}
          setTodoList={setTodoList}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
