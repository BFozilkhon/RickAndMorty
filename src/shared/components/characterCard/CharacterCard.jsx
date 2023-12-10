import React, { useState } from 'react';
import { Tooltip } from '@mui/material';

import { ErrorMessage, SuccessMessage } from '../message/Message';
import { useCharacterTodoContext } from '../../../storage/characterTodo/CharacterTodoContext';

import { Box, Container } from './CharacterCard.styled';

const CharacterCard = ({
  id,
  name,
  img,
  status,
  species,
  origin,
  location,
}) => {
  const { todoData, setFavouriteCharacter } = useCharacterTodoContext();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const allCharacters = todoData.flatMap((value) => [...value.items]);

  const handleLoveClicked = (characterName) => {
    if (allCharacters.every((value) => value.name !== characterName)) {
      setFavouriteCharacter((prev) => [
        { id: id, name: characterName },
        ...prev,
      ]);
      setIsSuccessOpen(true);
    } else {
      setIsErrorOpen(true);
    }
  };

  return (
    <Container>
      <Container.Img src={img} alt='character_img' />
      <Box>
        <Box.Title>{name}</Box.Title>
        <Box.Text>
          {status} - {species}
        </Box.Text>

        <Box.Descr>Last known location:</Box.Descr>
        <Box.Text>{location}</Box.Text>

        <Box.Descr>First seen in:</Box.Descr>
        <Box.Text>{origin}</Box.Text>
        <Tooltip title='Loved' placement='top' arrow>
          <Box.Icon
            active={
              allCharacters.some((value) => value.name === name) ? 'active' : ''
            }
            onClick={() => handleLoveClicked(name)}
            icon={'mdi:heart'}
          />
        </Tooltip>
      </Box>

      <SuccessMessage
        isOpen={isSuccessOpen}
        setIsOpen={setIsSuccessOpen}
        message={'Character Successfully Added'}
      />
      <ErrorMessage
        isOpen={isErrorOpen}
        setIsOpen={setIsErrorOpen}
        message={'Error Occured'}
      />
    </Container>
  );
};

export default CharacterCard;
