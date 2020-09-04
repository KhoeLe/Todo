import React from "react"
import Todo from "./Todo"

const TodoList = ({todos,setTodos,filterTodos}) =>{
    
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filterTodos.map((todo) =>(
                <Todo Mlem={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
            ))}
        </ul>
      </div>
    )
}
export default TodoList;