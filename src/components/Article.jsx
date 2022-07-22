import {
  Button,
  ButtonGroup,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

const Article = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(_isOpen => !_isOpen);
  };
  return (
    <div>
      <article style={{ border: '1px solid gray' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
        consectetur ligula. Cras bibendum non est at facilisis. Nullam dignissim
        urna lacus, sed sodales nibh varius sit amet. In finibus dictum neque,
        quis convallis erat congue sit amet. Donec vel scelerisque odio, vel
        facilisis ligula. Pellentesque vel luctus nunc. Fusce efficitur sem
        vitae tempus ultrices. Mauris auctor sollicitudin dui eu accumsan. Sed
        venenatis rutrum libero, ut porttitor nisl. Aliquam fermentum sodales
        tortor non bibendum. Proin hendrerit efficitur nisl. Nullam iaculis,
        ante in convallis sollicitudin,
      </article>
      <ButtonGroup variant="outlined">
        <Button>Text</Button>
        <Button onClick={onClick}>Open</Button>
      </ButtonGroup>
      <Button variant="outlined">Outlined</Button>
      <Dialog open={isOpen ? true : false}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>sds</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined" onClick={onClick}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Article;
