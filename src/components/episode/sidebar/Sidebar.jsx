import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Container, Box } from './Sidebar.styled';

const Sidebar = ({ allEpisodeData }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Title>All Episodes</Wrapper.Title>
      <Container>
        {allEpisodeData?.map(({ name, id }) => {
          return (
            <Box key={id} onClick={() => navigate(`/episode/${id}`)}>
              <Box.Name>{name}</Box.Name>
            </Box>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
