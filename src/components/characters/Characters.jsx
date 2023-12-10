import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

import Opener from '../../shared/layouts/opener/Opener';
import CharacterCard from '../../shared/components/characterCard/CharacterCard';

import { Box, Container, Wrapper } from './Characters.styled';

export const Characters = () => {
  const [characterData, setCharacterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  //   fetching process
  const dataFetcher = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await response?.json();

      setCharacterData((prevItems) => [...prevItems, ...data?.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  // infinite scroll logic
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    dataFetcher();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <>
      <Opener title={'Characters'} />
      <Wrapper>
        <Container>
          {/* characters */}
          <Box>
            {characterData.map((character) => {
              return (
                <CharacterCard
                  key={character?.id}
                  id={character?.id.toString()}
                  img={character?.image}
                  name={character?.name}
                  status={character?.status}
                  species={character?.species}
                  origin={character?.origin?.name}
                  location={character?.location?.name}
                />
              );
            })}
          </Box>
          {isLoading && <CircularProgress />}
          {error && <p>Error: {error.message}</p>}
        </Container>
      </Wrapper>
    </>
  );
};

export default Characters;
