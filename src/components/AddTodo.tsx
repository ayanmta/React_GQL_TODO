import React,{useState} from 'react'
import { ApolloCache } from "@apollo/react-hooks";
import { FetchResult } from "apollo-boost";

import { useTodoMutation } from "../useRequest";
import { ADD_TODO, GET_TODOS } from "../graphql";
import { ITodo, ITodoMutation, ITodos } from "../type/Todo";
const AddTodo = () => {
    const [formData,setFormData]=useState<ITodo|{}>()
    const [addTodo]=useTodoMutation(ADD_TODO)
    const handleForm = (e:React.FormEvent<HTMLInputElement>) =>{
      setFormData({
        ...formData,[e.currentTarget.id]:e.currentTarget.value
      })
    }

    const handleSaveTodo = (e:React.FormEvent,{title,description}:ITodo|any)=>{
      e.preventDefault();
      addTodo({
        variables:{title,description},
        update:(
          cache:ApolloCache<ITodoMutation>,
          {data:{addTodo}}:FetchResult<ITodoMutation>
        )=>{

          const cacheData = cache.readQuery({query:GET_TODOS}) as ITodos
          cache.writeQuery({
            query:GET_TODOS,
            data:{
              getTodos:
                [...cacheData.getTodos,addTodo]
            }
          })
        }
      })
    }

  return (
    <form onSubmit={(e)=>handleSaveTodo(e,formData)}className="form">
        <div>
         <label htmlFor='title'>
Title
         </label>
         <input onChange={handleForm} type='text' id="title"/>
        <div>
        <label htmlFor='description'>
        description
         </label>
         <input onChange={handleForm} type='text' id="description"/>
        </div>
        <button>Add Todo</button>
</div>
    </form>
  )
}

export default AddTodo