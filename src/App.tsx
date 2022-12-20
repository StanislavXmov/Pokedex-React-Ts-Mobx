import React from 'react';
import Typography from '@mui/material/Typography';

import styles from "./App.module.css";
import { Container } from '@mui/material';
import { ListWrapper } from './components/ListWrapper';

const App = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h3' align='center' >
        Pokedex
      </Typography>
      <ListWrapper />
    </Container>
  );
}

export default App;
