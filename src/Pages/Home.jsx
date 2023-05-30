import { Container } from '@mui/material';
import React, { useState } from 'react'
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';

export default function Home() {

  const [todos,setTodos] = useState([]); //array das minhas tarefas

 
  //pegando a informação do componente forms para adcionar no array de tarefas
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo)=> todo.id !== id);
    setTodos(filtered);
  }

  const editTodo = (id,editedText) => {
    var todosArray = [...todos];

    for(var i in todosArray) {
      if(todosArray[i].id == id){
        todosArray[i].text = editedText;
      }
    }
    setTodos(todosArray);
  }

  return (
    <div>
      <Container maxWidth="xs" style={{marginTop: "1em"}}>

        <Form addTodo={addTodo} />

        <div style={{backgroundColor:"white ", marginTop:"1em"}}>
          {todos.map((todo)=>(<TodoItem editTodo={editTodo} key={todo.id}todo={todo} deleteTodo={deleteTodo}/>))}
        </div>
        
      </Container>
    </div>
  );
}
  

