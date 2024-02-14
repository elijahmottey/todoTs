import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import {IoMdDoneAll} from "react-icons/io"


interface Props {
    todos:Todos[],
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>,
    todo:Todo,

}



export default function SiglePage({todo,todos,setTodos}:Props) {

const [edit,setEdit]=useState<boolean>(false)
const [editTodo,setEditTodo]=useState<string>(todo.todo)

   const handleDone = (id:number)=>{
    setTodos(
        todos.map((item)=>
        item.id === id ? {...item, isDone:!item.isDone} : item)
    )
   }
    

    const handleDelete= (id:number)=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
    
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
    
        setEdit(false);
    };
    
  return (
    <form action="" onSubmit={(e)=>handleEdit(e, todo.id)} className="bg-blue-200 px-2">
        {edit ? (<input value={editTodo} type="text" onChange={(e)=>setEditTodo(e.target.value)}/>)
        
    :(todo.isDone ? (<s>{todo.todo}</s> ):<span>{todo.todo}</span>)
    }

        
        <div className="inline-flex justify-center ml-3">
            <span onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }
            }} className="hover:text-purple-700 ml-2">
                <FaEdit/> 
            </span>
            <span  onClick={()=>handleDelete(todo.id)} className="hover:text-purple-700 text-red-500 ml-2"><FaTimes/></span>
            <span onClick={()=>handleDone(todo.id)} className="hover:text-purple-700 focus:text-red-700 ml-2"><IoMdDoneAll/></span>
        </div>
        

    </form>
  )
}
