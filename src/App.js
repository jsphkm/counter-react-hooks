import React from 'react';
import './App.css';
import Store from './store';
import { initialState as count } from './store/Count';
import Counter from './containers/Counter';

const initialState = {
  count
};

const App = () => (
  <Store.Provider initialState={initialState}>
    <Counter />
  </Store.Provider>
)

export default App;
