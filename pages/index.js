import { useState } from "react"


const Home =()=> {
  const [todos, setTodos]=useState([])
  const [todo, setTodo] = useState("")
  return (
    
    <div className="container">
      <div className="form">
        <input value={todo} onChange={(e)=>{
          setTodo(e.target.value)

        }}  placeholder= "Write something"/>
        <button onClick={()=>{
          setTodos([...todos,todo])
          setTodo('')
        }}>Add</button>
      </div>
<div className="list">
 {todos.map((item, index)=>(
   <div className="list-item" key={index}>
     <p>{item}</p>
     <button onClick={()=>{
       setTodos(todos.filter((el)=>(el!==item)))
     }}>Remove</button>
   </div>
 ))}
</div>

</div>
  )
}
export default Home