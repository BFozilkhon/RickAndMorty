import React, { useEffect, useState } from 'react';

import { useAxios } from '../../hooks/useAxios';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import Opener from '../../shared/layouts/opener/Opener';

import { Wrapper } from './Episode.styled';

export const Episode = () => {
  const { request } = useAxios();

  const [allEpisodeData, setAllEpisodeData] = useState([]);

  const allEpisodesFetcher = async () => {
    const response = await request({ url: '/episode' });
    setAllEpisodeData(response?.results);
  };

  useEffect(() => {
    allEpisodesFetcher();
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
