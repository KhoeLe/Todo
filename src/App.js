import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);
  

  console.log(status,"Status>>>>")
  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
        // console.log()
    }
    
  };
  // console.log(filterTodos,"filter")
  //save to local

  const saveLocalTodos = () => {
    
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }else{ 
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <Form
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        status={status}
        setStatus={setStatus}
        handleFilter={handleFilter}
      />
      <TodoList
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
