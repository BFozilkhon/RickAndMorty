import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: var(--bg-primary-color);
  padding: 30px;
  border-radius: 8px;
  position: relative;
`;

Container.Title = styled.h1`
  font-size: 40px;
  color: var(--text-white-color);
`;

Container.Text = styled.p`
  color: var(--text-white-color);
  margin: 10px 0px;
`;

Container.Number = styled.p`
  border-radius: 53px;
  position: absolute;
  top: 80px;
  right: 5%;
  transform: translate(0%, -50%);
  -webkit-text-stroke: 2px var(--primary-color);
  opacity: 0.3;
  line-height: 1;
  transition: all 0.5s ease-out 0s;
  font-size: 138px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  color: var(--text-orange-color);
`;

const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-top: 50px;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export { Container, Box };
