import { Todos } from './Model';
import SiglePage from './SiglePage';
import NoData from '../assets/noData.webp'

interface Props {
  todos:Todos[],
  setTodos:React.Dispatch<React.SetStateAction<Todos[]>>
}

export default function TodoList({todos, setTodos}:Props) {

  if(todos.length===0){
    return <div  className=''>
         <img src={NoData} alt="" className='mx-auto md:pt-4 sm:pt-6  w-80 sm:w-30 animate-bounce ' />
         <h5 className='text-center text-red-800'>No task available</h5>
    </div>
  }


  return (
    <div className='grid grid-cols-1 px-3 bg-slate-300 gap-3 py-5  md:grid-cols-2 lg:grid-cols-3 '>
      { todos.map((todo)=>(
        <SiglePage todos={todos} key={todo.id} todo={todo} setTodos ={setTodos}/>
      ))

      }
    </div>
  )
}
