'use client'
import { useTodos } from '@/store/todos';
import React, { FormEvent, useState } from 'react'

const AddTodo = () => {
    const [ todo, setTodo ] = useState("");
    const {handleAddTodo, handleDeleteAll} = useTodos();
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" name="" placeholder='Write your todo' value={todo} onChange={(event)=> setTodo(event.target.value)}/>
        <button type="submit">ADD</button>
        <button type="button" onClick={handleDeleteAll}>Delete All</button>
    </form>
  )
}

export default AddTodo