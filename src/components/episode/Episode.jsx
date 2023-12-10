import React, { useEffect, useState } from 'react';

import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import Opener from '../../shared/layouts/opener/Opener';

import { Wrapper } from './Episode.styled';

export const Episode = () => {
  const [allEpisodeData, setAllEpisodeData] = useState([]);

  const fetchAllEpisode = async () => {
    await fetch('https://rickandmortyapi.com/api/episode')
      .then((res) => res.json())
      .then((res) => setAllEpisodeData(res?.results));
  };

  useEffect(() => {
    fetchAllEpisode();
  }, []);

  return (
    <>
      <Opener title={'Episodes'} />
      <Wrapper>
        <Sidebar allEpisodeData={allEpisodeData} />
        <Main />
      </Wrapper>
    </>
  );
};

export default Episode;
