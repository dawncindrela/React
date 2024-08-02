import PropTypes from "prop-types";
import { TodoItem } from "./Todoitem";

export function Tlist ( { todos , toggleTodo, deleteTodo }){
    

      return <>
        <h1 className='Header' >ToDo list</h1>
  <ul className='list'>
    {todos.length === 0 && "No Todos"}
    {
      todos.map(todo=>{
        return(
            < TodoItem {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo} />
            
      )})
    }
    
  </ul>
      </>
}


Tlist.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired, // toggleTodo is a function and required
    deleteTodo: PropTypes.func.isRequired,
  };