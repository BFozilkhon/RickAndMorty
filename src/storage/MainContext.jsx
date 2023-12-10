import React from 'react';
import CharacterTodoProvider from './characterTodo/CharacterTodoContext';

const MainContext = ({ children }) => {
  return <CharacterTodoProvider>{children}</CharacterTodoProvider>;
};

export default MainContext;
