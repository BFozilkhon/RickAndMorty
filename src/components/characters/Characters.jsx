import React, { useEffect, useState, useRef } from 'react';
import { CircularProgress } from '@mui/material';

import { useAxios } from '../../hooks/useAxios';
import Opener from '../../shared/layouts/opener/Opener';
import CharacterCard from '../../shared/components/characterCard/CharacterCard';

import { Box, Container, Wrapper } from './Characters.styled';

export const Characters = () => {
  const { request } = useAxios();
  const targetRef = useRef(null);

  const [characterData, setCharacterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  //   fetching process
  const characterFetcher = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await request({ url: `/character/?page=${page}` });

      setCharacterData((prev) => [...prev, ...response?.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // infinite scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoading) {
          characterFetcher();
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [page]);

  return (
    <div>
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

          {/* intersection */}
          <Container.IntersectionObserverDiv ref={targetRef} />
          {isLoading && <CircularProgress />}
          {error && <p>Error: {error.message}</p>}
        </Container>
      </Wrapper>
    </div>
  );
};

export default Characters;
