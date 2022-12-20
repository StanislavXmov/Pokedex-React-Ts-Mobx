import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';
import { Box, List, } from '@mui/material';
import { ListItem } from './ListItem';



export const ListWrapper = observer(() => {
  const {app} = useStore();

  useEffect(() => {
    app.getNamedList(0, 10);
  }, []);

  return (
    <Box sx={{width: '100%'}} >
      {app.loading && <h2>Loading ...</h2>}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0px auto'}}>
          {app.namedList.results && app.namedList.results.map(resourse => <ListItem key={resourse.name} resource={resourse} />)}
      </List>
    </Box>
  )
});
