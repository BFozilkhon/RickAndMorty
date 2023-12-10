import styled from 'styled-components';

import bgImg from '../../assets/images/bg.png';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .specific-title {
    color: var(--text-orange-color);
  }
`;

const Background = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: center;
  height: 480px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -50px;
`;

Background.Header = styled.h1`
  color: var(--text-dark-color);
  font-size: 80px;
  font-weight: 900;
  text-align: center;
  line-height: 84px;
`;

export { Wrapper, Background };
