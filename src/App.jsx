import { useEffect, useState } from 'react';
import './style.css';
import { NewTodoForm } from './NewtodoForm';
import { Tlist } from './Todolist';

export default function App()
{
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  


  useEffect(()=> {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function toggleTodo(id,completed)
     {
       setTodos(currentTodos=>{
         return currentTodos.map(todo =>{
           if(todo.id=== id)
           {
            todo.completed=completed
            return {...todo,completed}
           }
           return (todo)
             
         })
         }
       )
     }
     function deleteTodo(id) {
       setTodos(currentTodos=>{
         return currentTodos.filter(todo => todo.id !== id)
       })
         }
  function addTodo(title) {
    setTodos(currentTodos=>{
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), title, completed: false
        },
      ]
      })
    }
  console.log(todos)
  return <>
  < NewTodoForm onSubmit={addTodo} />
  < Tlist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
}
