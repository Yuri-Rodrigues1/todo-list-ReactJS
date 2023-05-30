import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDialog(props) {
    const [editedText, setEditedText] = React.useState(props.todo.text);

    const textHandler = ()=>{
        props.editTodo(props.todo.id, editedText);
        props.dialogHandler();
    }
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editando tarefa"}</DialogTitle>
        <DialogContent>
            <TextField fullWidth defaultValue={props.todo.text} onChange={(e)=>setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
