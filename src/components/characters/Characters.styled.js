import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  background-color: var(--bg-primary-color);
`;

const Container = styled.div`
  width: 100%;
`;

Container.IntersectionObserverDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export { Wrapper, Container, Box };
