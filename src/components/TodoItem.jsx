import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDialog from './EditDialog';


export default function TodoItem(props) {

  const [openDialog,setOpenDialog] = React.useState(false);

  const dialogHandler = ()=>{
    setOpenDialog(!openDialog);
  }
 
  return (
    <div>
      <EditDialog editTodo={props.editTodo} open={openDialog} dialogHandler={dialogHandler} todo={props.todo}/>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={()=>props.deleteTodo(props.todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={props.todo.text} onClick={()=>setOpenDialog(true)}/>
            </ListItemButton>
          </ListItem>
      </div>    
  );
}
