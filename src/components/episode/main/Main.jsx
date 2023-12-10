import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CharacterCard from '../../../shared/components/characterCard/CharacterCard';

import { Box, Container } from './Main.styled';

const Main = () => {
  const [data, setData] = useState({});
  const [characterData, setCharacterData] = useState([]);
  const { episodeId } = useParams();

  const dataFetcher = async () => {
    await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((res) => res.json())
      .then(async (res) => {
        setData(res);

        //   character data fetching
        const urls = res?.characters?.splice(0, 15);
        const promises = urls?.map((value) =>
          fetch(value).then((res) => res.json())
        );
        const responses = await Promise.all(promises);

        setCharacterData(responses);
      });
  };

  useEffect(() => {
    dataFetcher();
  }, [episodeId]);
  return (
    <Container>
      <Container.Title>Espisode: {data?.name}</Container.Title>
      <Container.Text>Air Date: {data?.air_date}</Container.Text>
      <Container.Text>Episode Number: {data?.episode}</Container.Text>
      <Container.Number>
        {episodeId.length == 1 ? `0${episodeId}` : episodeId}
      </Container.Number>

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
    </Container>
  );
};

export default Main;
