import React, { useEffect, useState } from 'react';
import { Avatar, ListItemAvatar, ListItemText, ListItem as Item, Skeleton } from '@mui/material';
import { NamedAPIResource, Pokemon } from 'pokenode-ts';
import { getPokemonByName } from '../Api';
import { blue } from '@mui/material/colors';

export const ListItem = ({resource}: {resource: NamedAPIResource}) => {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonByName(resource.name);
      setPokemonDetails(data);
    }

    fetchData();
  }, [])

  return (
    <>
    {!pokemonDetails && <Item>
      <ListItemAvatar>
        <Skeleton variant="circular" width={56} height={56} />
      </ListItemAvatar>
      <Skeleton variant="rounded" width={260} height={56} sx={{marginLeft: '12px'}} />
    </Item>}
    {pokemonDetails && <Item sx={{backgroundColor: blue[50], borderRadius: '16px', marginBottom: '16px' }}>
      <ListItemAvatar>
        <Avatar src={pokemonDetails.sprites.front_default!} sx={{ width: 56, height: 56 }} />
      </ListItemAvatar>
      <ListItemText primary={pokemonDetails.name.toLocaleUpperCase()} secondary={pokemonDetails.types.map(typeObj => typeObj.type.name).join(" ")} />
    </Item>}
    </>
  )
}
