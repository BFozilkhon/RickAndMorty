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

Container.Title = styled.h1`
  font-size: 40px;
  color: var(--text-white-color);
`;

Container.Text = styled.p`
  color: var(--text-white-color);
  margin: 10px 0px;
`;

Container.Number = styled.p``;

const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-top: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export { Wrapper, Container, Box };
