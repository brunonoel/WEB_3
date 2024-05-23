import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';

const ListaCurriculos = ({ curriculos, onVerDetalle, onEliminar }) => {
  const handleEliminarClick = (curriculo) => {
    onEliminar(curriculo);
  };

  return (
    <List>
      {curriculos.map((curriculo, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar alt={curriculo.nombre} src={curriculo.foto} />
          </ListItemAvatar>
          <ListItemText primary={curriculo.nombre} secondary={curriculo.email} />
          <Button variant="outlined" onClick={() => onVerDetalle(curriculo)}>Ver más</Button>
          <Button variant="outlined" color="error" onClick={() => handleEliminarClick(curriculo)}>Eliminar</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ListaCurriculos;
