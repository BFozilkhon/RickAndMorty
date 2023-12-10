import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--bg-primary-color);

  .pagination {
    margin-top: 20px;
  }

  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
    background-color: var(--bg-secondary-color);
    width: 40px;
    height: 40px;
    transition: 0.5s;
    color: var(--text-white-color);
  }
`;

const Box = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  margin-top: 50px;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export { Wrapper, Box };
