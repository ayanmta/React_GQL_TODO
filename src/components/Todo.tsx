import React from 'react';
import { ITodo } from '../type/Todo';

type Props={
todo:ITodo
}
const Todo:React.FC<Props> = ({todo}) => {
  const {title,description} = todo;
  return (
    <div className='card'>
       <h1>{title}</h1>
      <span>{description}</span>
    </div>
  )
}

export default Todo