import React from 'react';
import Typography from '@mui/material/Typography';

import styles from "./App.module.css";
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h3' align='center' >
        Pokedex
      </Typography>
    </Container>
  );
}

export default App;
