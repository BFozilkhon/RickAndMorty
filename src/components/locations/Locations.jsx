import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import Opener from '../../shared/layouts/opener/Opener';
import LocationCard from './card/LocationCard';

import { Box, Wrapper } from './Locations.styled';

const Locations = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [locationPageApi, setLocationPageApi] = useState(
    parseInt(location.search.at(-1)) || 1
  );
  const [locationData, setLocationData] = useState([]);

  //   searchParams
  const baseUrl = 'https://rickandmortyapi.com/api/location';
  const url = new URL(baseUrl);
  url.searchParams.set('page', locationPageApi);

  const locationFetcher = async () => {
    await fetch(url.toString())
      .then((res) => res.json())
      .then((res) => setLocationData(res?.results));
  };

  useEffect(() => {
    locationFetcher();
    navigate(`/locations?page=${locationPageApi}`);
  }, [locationPageApi]);

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
            setLocationPageApi(value);
          }}
          className='pagination'
          count={7}
          page={locationPageApi}
          variant='outlined'
          shape='rounded'
        />
      </Wrapper>
    </>
  );
};

export default Locations;
