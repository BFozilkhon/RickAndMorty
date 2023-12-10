import React from 'react';

import { Container, Box, Flex } from './LocationCard.styled';

const LocationCard = ({ name, type, dimension }) => {
  return (
    <Container>
      <Box>
        <Box.Title>{name}</Box.Title>
        <Container.Badge>Location</Container.Badge>
      </Box>

      <Flex>
        <Container.Text>{type}</Container.Text>
        <Flex.Circle />
        <Container.Text>{dimension}</Container.Text>
      </Flex>

      <Container.Text>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content
      </Container.Text>
    </Container>
  );
};

export default LocationCard;
