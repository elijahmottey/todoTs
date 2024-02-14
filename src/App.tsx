
import { useState } from 'react'
import InputFeild from './components/InputFeild'
import { Todos } from './components/Model'
import './App.css'
import TodoList from './components/TodoList'




export default function App() {

  const [todo,setTodo]=useState<string>('')
  const [todos,setTodos]=useState<Todos[]>([])

  

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo(" ")
    }
    

  }
  
  return (
    <div className='h-screen mt-4 bg-yellow-50 '>
      <span className="text-2xl  ml-7 font-extrabold box-decoration-clone bg-gradient-to-b from-purple-700 to-pink-700 text-white ">Task Management</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     

      <TodoList todos={todos} setTodos={setTodos}/>
    

      
      <div className=" subpixel-antialiased font-sm py-6 text-justy  text-wrap px-5  font-mono ">Explore the seamless experience of a cutting-edge todo web application designed for optimal task management. Dive into the intuitive interface where you can effortlessly create, organize, and track your tasks. With a user-friendly design and robust functionality, this app empowers you to stay productive and focused. Effortlessly add and prioritize tasks, all while enjoying a streamlined and efficient workflow. Embrace the simplicity of task management as you conquer your to-do list with ease. 
      Your productivity journey begins here."
       </div>
      
      <p className='text-center '>&copy;2024 LivTech 
        All rights reserved
      </p>
      <ul className='text-center pb-10'>
        <a href="#"><li>Check potfolio site</li></a>
        <a href="#"><li>github</li></a>

      </ul>
      
    </div>
  )
}
