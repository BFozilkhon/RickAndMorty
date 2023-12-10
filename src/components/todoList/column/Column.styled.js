import styled from 'styled-components';

const Wrapper = styled.div`
  width: 350px;
  padding: 20px;
  height: fit-content;
  background-color: var(--bg-primary-color);
  border-radius: 8px;
`;

Wrapper.Title = styled.h1`
  color: var(--text-orange-color);
  margin-bottom: 20px;
  font-size: 25px;
`;

const NoDataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary-color);
  padding: 10px 0px;
`;

NoDataBox.Text = styled.h3`
  font-size: 25px;
  color: var(--text-white-color);
`;

NoDataBox.Img = styled.img`
  width: 70px;
`;

const Box = styled.div`
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: var(--bg-secondary-color);
  cursor: grab;

  color: var(--text-white-color);
  &:hover {
    opacity: 0.5;
  }
`;

Box.Name = styled.p``;

export { Wrapper, NoDataBox, Box };
