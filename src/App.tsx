import React from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import {GET_TODOS} from "./graphql";
import { ITodo } from './type/Todo';
import { useTodoQuery } from './useRequest';

const App = () => {
    const { loading, error, data } = useTodoQuery(GET_TODOS);
    if (loading) return (<h1>Loading...</h1>);
  if (error) return (<h1>Something went wrong!</h1>);
  console.log("GQSFWGSF",data)
  return (
    <div>
    <h1>MY TODO</h1>
    <AddTodo/>
    {data.getTodos.map((todo:ITodo)=><Todo key={todo.id} todo={todo}/>)}
    </div>
  )
}

export default App