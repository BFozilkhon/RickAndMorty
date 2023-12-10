import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  width: 350px;
  padding: 20px 10px;
  background-color: var(--bg-primary-color);
  border-radius: 8px;
  position: sticky;
  top: 30px;
`;

Wrapper.Title = styled.h1`
  color: var(--text-white-color);
`;

const Container = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  height: 90%;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Box = styled.div`
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: var(--bg-secondary-color);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

Box.Name = styled.p`
  color: var(--text-white-color);
`;

export { Wrapper, Container, Box };
