import React from 'react'
import { toast } from 'react-toastify'

const TodoItem = ({todo, deleteTodo, id}) => {
  return (
    <div className='todo-items'>
        <p>{todo}</p>
        <i class="fa-solid fa-circle-minus" onClick={()=>{
            deleteTodo(id)
            toast.error('Todo Deleted!')
        }}></i>               
    </div>
  )
}

export default TodoItem
