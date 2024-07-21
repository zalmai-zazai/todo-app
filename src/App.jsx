import { useState } from 'react';
import Header from './Components/Header';
import './App.css';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {
  const [toDoList, setTodoList] = useState([]);
  return (
    <>
      <Header />
      <Form toDoList={toDoList} setTodoList={setTodoList} />
      <Footer toDoList={toDoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
