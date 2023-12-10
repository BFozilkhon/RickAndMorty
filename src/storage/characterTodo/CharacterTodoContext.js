import React, { createContext, useContext, useEffect, useState } from 'react';
import { todoListData } from '../../shared/utils/todoListData';

const CharacterTodoContext = createContext();

export const useCharacterTodoContext = () => useContext(CharacterTodoContext);

const CharacterTodoProvider = ({ children }) => {
  const localStorageTodoData = localStorage.getItem('todo');
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorageTodoData) || todoListData
  );
  const [favouriteCharacter, setFavouriteCharacter] = useState(
    todoData[0]?.items
  );

  useEffect(() => {
    const newFavouriteColumn = { ...todoData[0], items: favouriteCharacter };

    const newTodoData = todoData.map((value) =>
      value.id === 'column1' ? newFavouriteColumn : value
    );
    setTodoData(newTodoData);
  }, [favouriteCharacter]);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoData));
  }, [todoData]);

  return (
    <CharacterTodoContext.Provider
      value={{
        todoData,
        setTodoData,
        favouriteCharacter,
        setFavouriteCharacter,
      }}
    >
      {children}
    </CharacterTodoContext.Provider>
  );
};

export default CharacterTodoProvider;
