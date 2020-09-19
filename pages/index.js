import { useState,useEffect } from "react"
import { Row, Col, Input, Button, Card } from 'antd';
import {PlusOutlined,CloseOutlined} from '@ant-design/icons'

const Home =()=> {
  const [todos, setTodos]=useState([])
  const [todo, setTodo] = useState("")
  useEffect(() => {
    const _storageData = localStorage.getItem("todos");
    if (_storageData) {
      setTodos(JSON.parse(_storageData));
    }
  }, []);
  return (
    
    <div className="container">
      <div className="form">
        <Row gutter={20}>
          <Col span={18}> 
        <Input style={{width:'100%'}} value={todo} onChange={(e)=>{
          setTodo(e.target.value)
          
        }}  placeholder= "Write something"/>
        </Col>
        <Col span={4}>

        <Button type='primary' icon={<PlusOutlined/>}
         style={{width:'100%'}} onClick={()=>{
          setTodos([...todos,todo])
          setTodo('')
          localStorage.setItem('todos', JSON.stringify([...todos,todo]))

        }}>Add</Button>
        </Col>
        <Col span={2}>
          <Button type='primary' onClick={()=>{
            setTodos([])
            localStorage.setItem('todos','')
          }} icon={<CloseOutlined />}>Remove All</Button>
        </Col>
        </Row>
      </div>

<div className="list">
 {todos.map((item, index)=>(
   <div className="list-item" key={index}>
               <Card hoverable >

    <Row gutter={20}>
   <Col span={18}>
     <p>{item}</p>
     </Col> 
     <Col span={4}>
     <Button  type='primary' icon={<CloseOutlined />} onClick={()=>{
       setTodos(todos.filter((el)=>(el!==item)))
       localStorage.setItem("todos", JSON.stringify(todos.filter((el) => el !== item)))
      }}>Remove</Button>
      </Col>  
      </Row>
      </Card>
   </div>
 ))}
</div>
</div>
  )
}
export default Home