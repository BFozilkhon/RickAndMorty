import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 25px;
  border-radius: 8px;
  background-color: var(--bg-secondary-color);
`;

Container.Badge = styled.div`
  color: var(--text-orange-color);
  background-color: var(--bg-primary-color);
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 30px;
  user-select: none;
`;

Container.Text = styled.p`
  color: var(--text-white-color);
  margin-top: 10px;
  line-height: 24px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Box.Title = styled.h1`
  color: var(--text-white-color);
  font-size: 20px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

Flex.Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--text-orange-color);
  margin: 8px 10px 0px 10px;
`;

export { Container, Box, Flex };
