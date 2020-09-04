import React from "react"


const Todo = ({Mlem,todo, todos,setTodos}) =>{

    // console.log(Mlem,"From Todo")
    const handleDele = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
            
    }
    const hanldeSubmit = ( ) => {
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
                return{
                    ...item,
                    completed:!item.completed
                }
            } return item;
            
        }))
    }
    console.log("object", todo)
    console.log(todo.completed,"Any")
    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ?"completed": ""}`}> {Mlem}  </li>
                <button onClick={hanldeSubmit} className="complete-btn">
                    <i className="fas fa-check"> </i>
                </button>
                <button onClick={handleDele} className="trash-btn">
                     <i className="fas fa-trash"> </i>
                </button>
        </div>
    )
}
export default Todo;



////// ty lam tipe hehehehehe