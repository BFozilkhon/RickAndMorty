import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 25px;
  border-bottom: 1px solid rgba(46, 41, 51, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .active {
    color: var(--text-orange-color);
  }
  .active .active-btn {
    background: var(--text-orange-color) !important;
    color: white !important;
  }
`;

Wrapper.Logo = styled(Logo)``;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

NavItems.Item = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: var(--text-orange-color);
  }
`;

NavItems.Btn = styled.button`
  border: 1px solid var(--text-orange-color);
  border-radius: 8px;
  color: black;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 25px;
  background: none;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: var(--text-orange-color);
    color: white;
  }
`;

export { Wrapper, NavItems };
