import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavItems, Wrapper } from './Navbar.styled';

const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to='/episode/1'>
        <Wrapper.Logo />
      </NavLink>

      <NavItems>
        <NavItems.Item to={'/episode/1'}>Episodes</NavItems.Item>
        <NavItems.Item to={'/characters'}> Characters</NavItems.Item>
        <NavItems.Item to={'/locations?page=1'}>Locations</NavItems.Item>
        <NavLink to={'/todo-list'}>
          <NavItems.Btn className='active-btn'>Todo List</NavItems.Btn>
        </NavLink>
      </NavItems>
    </Wrapper>
  );
};

export default Navbar;
