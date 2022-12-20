import React from 'react';
import { Avatar, ListItemAvatar, ListItemText, ListItem as Item } from '@mui/material';

export const ListItem = ({name}: {name: string}) => {
  return (
    <Item>
      <ListItemAvatar>
        <Avatar>
          {/* <ImageIcon /> */}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary="Jan 9, 2014" />
    </Item>
  )
}
