import {DocumentNode,useQuery,useMutation} from '@apollo/react-hooks';
import { ITodoMutation } from './type/Todo';

export function useTodoQuery(gqlQuery:DocumentNode){
const{loading, error , data}=useQuery(gqlQuery)
return {loading,error,data}
}

export function useTodoMutation(gqlQuery: DocumentNode){
    const [addTodo] = useMutation<ITodoMutation>(gqlQuery);
    return [addTodo];
}