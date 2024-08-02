import PropTypes from "prop-types";
export function TodoItem({ completed, id, title, toggleTodo , deleteTodo}) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button 
        onClick={() => deleteTodo(id)} 
        className="btn btn-danger">
          Delete
        </button>
      </li>
    )
  }

  TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired, // completed is a boolean and required
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id can be a string or a number and is required
    title: PropTypes.string.isRequired, // title is a string and required
    toggleTodo: PropTypes.func.isRequired, // toggleTodo is a function and required
    deleteTodo: PropTypes.func.isRequired, // deleteTodo is a function and required
  };
  
  export default TodoItem;