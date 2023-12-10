import React from 'react';

import { Background, Wrapper } from './Opener.styled';

const Opener = ({ title }) => {
  return (
    <Wrapper>
      <Background>
        <Background.Header>
          The Rick and Morty <span className='specific-title'>All {title}</span>
        </Background.Header>
      </Background>
    </Wrapper>
  );
};

export default Opener;
