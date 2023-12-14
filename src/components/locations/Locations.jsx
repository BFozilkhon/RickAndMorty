import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import { useAxios } from '../../hooks/useAxios';
import Opener from '../../shared/layouts/opener/Opener';
import LocationCard from './card/LocationCard';

import { Box, Wrapper } from './Locations.styled';

const Locations = () => {
  const { request } = useAxios();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const [locationData, setLocationData] = useState([]);

  const locationFetcher = async () => {
    const response = await request({ url: `/location?page=${page}` });
    setLocationData(response?.results);
  };

  useEffect(() => {
    locationFetcher();
  }, [searchParams]);

  return (
    <>
      <Opener title={'Locations'} />
      <Wrapper>
        <Box>
          {locationData.map((location) => {
            return (
              <LocationCard
                key={location?.id}
                name={location?.name}
                type={location?.type}
                dimension={location?.dimension}
              />
            );
          })}
        </Box>
        <Pagination
          onChange={(e, value) => {
            setSearchParams({ page: value });
          }}
          className='pagination'
          count={7}
          page={parseInt(page)}
          variant='outlined'
          shape='rounded'
        />
      </Wrapper>
    </>
  );
};

export default Locations;
