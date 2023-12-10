import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--bg-secondary-color);
`;

Container.Img = styled.img`
  height: 100%;
  width: 40%;
  border-radius: 8px 0px 0px 8px;
`;

const Box = styled.div`
  padding: 10px;
`;

Box.Title = styled.h1`
  font-size: 25px;
  color: var(--text-white-color);
`;

Box.Text = styled.p`
  color: var(--text-white-color);
  margin-top: 3px;
`;

Box.Descr = styled.p`
  color: var(--text-gray-color);
  margin-top: 15px;
`;

Box.Icon = styled(Icon)`
  cursor: pointer;
  font-size: 30px;
  margin-top: 15px;
  color: ${({ active }) => (active ? 'red' : 'rgb(32, 35, 41)')};
  transition: 0.3s all;

  &:hover {
    color: red;
  }
`;

export { Container, Box };
