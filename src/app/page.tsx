import AddTodo from '@/components/add-todo'
import Todos from '@/components/todos'
import Navbar from '@/components/navbar'
import {RiTodoFill} from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <h2><RiTodoFill className="icons"/> TODO APP <RiTodoFill className="icons"/></h2>
      <Navbar />
      <AddTodo/>
      <Todos/>
    </main>
  )
}
