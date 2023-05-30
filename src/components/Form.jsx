import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form({addTodo}) {
    
    const [text,setText] = useState(null);
    const [id,setId] = useState(0);


    //transformando o todo em objeto para mandar texto e id
    const todoCreate = (text)=>{
        const todoObj = {text: text, id: id }
        setId(id+1)
        addTodo(todoObj); //props
        document.getElementById("outlined-basic").value = null; //apenas para esvaziar o campo de texto depois de adcionar a tarefa
    }

    
  return (
    <div>
        <Paper style={{padding: "1em"}}>
            <div style={{display:"flex", justifyContent: "center"}}>

                <TextField id="outlined-basic" label="Task" variant="outlined" 
                onChange={(e)=> setText(e.target.value)}fullWidth/>

                <Button variant="text" onClick={()=> todoCreate(text)} >ADD</Button>
            </div>
        </Paper>
    </div>
  )
}
