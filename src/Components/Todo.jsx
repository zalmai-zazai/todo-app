import React from 'react';
import style from './Todo.module.css';

const Todo = ({ todo, setTodoList, toDoList }) => {
  function handelDelete(todo) {
    console.log('Delete button has clicked', todo.name);
    setTodoList(toDoList.filter((todoItem) => todoItem.name !== todo.name));
  }
  function handelClick(todo) {
    console.log('item is clicked for ', todo.name);

    setTodoList(
      toDoList.map((item) =>
        item.name === todo.name ? { ...item, done: !item.done } : item
      )
    );
    console.log(toDoList);
  }

  return (
    <li className={style.item}>
      <div className={style.itemName}>
        <span
          className={todo.done ? style.completed : ''}
          onClick={() => handelClick(todo)}
        >
          {todo.name}
        </span>
        <span>
          <button
            onClick={() => handelDelete(todo)}
            className={style.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={style.line} />
    </li>
  );
};

export default Todo;
