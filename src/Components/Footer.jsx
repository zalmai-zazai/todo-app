import React from 'react';
import style from './Footer.module.css';
const Footer = ({ toDoList, setTodoList }) => {
  return (
    <div className={style.footer}>
      <span>
        Completed Tasks: {toDoList.filter((item) => item.done).length}
      </span>
      <span>
        Remaining Tasks: {toDoList.filter((item) => !item.done).length}
      </span>
    </div>
  );
};

export default Footer;
