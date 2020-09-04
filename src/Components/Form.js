import React from "react";

const Form = ({input,setInput, todos,setTodos,setStatus}) => {
    const hanldeInput = (e) =>{
            // console.log(e.target.value);
           setInput(e.target.value)
    }
    const handleSubmit = (e) =>{
            e.preventDefault();
            setTodos([
                ...todos, 
                {text:input, id:Math.random()*100 }
            ])
            setInput("");
    }
    const handleStatus = (e ) =>{
          // console.log(e.target.value)
        setStatus(e.target.value)
    }
    
  return (
    <form>
      <input value={input} onChange={hanldeInput} type="text" className="todo-input" />
      <button  onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square" />
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      
    </form>
  );
};
export default Form;
