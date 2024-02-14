import { useRef } from "react"
import '../App.css'

interface Props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAdd:(e:React.FormEvent)=>void
}

export default function InputFeild({todo,setTodo ,handleAdd}:Props) {
  const initialRef= useRef<HTMLInputElement>(null)
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        handleAdd(e)
        initialRef.current?.blur()
      }} className="bg-yellow-50 shadow-md  py-5 w-full pl-5 ">
      <input type="text" className="text-black-500 text-black shadow-md hover:border-purple-700  rounded-md lg:w-96 md:w-1/2 sm:w-1/2 h-8 border border-solid border-black  sticky "
      ref={initialRef}
       placeholder="enter a text" id="input"
      value={todo}  onChange={(e)=>setTodo(e.target.value)}/>
      <button type="submit" className="ring-2 bg-purple-700 line-h-10 h-10 ml-8  text-white outline-none border-none">Go</button>
      </form> 
      
    </div>
  )
}
