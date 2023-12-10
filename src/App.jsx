import React from 'react';
import Pages from './shared/routes/Pages';
import MainContext from './storage/MainContext';

const App = () => {
  return (
    <MainContext>
      <Pages />
    </MainContext>
  );
};

export default App;
