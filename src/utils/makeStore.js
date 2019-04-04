import React, { useState, useMemo, useContext } from 'react';
import immer from 'immer';

const makeStore = () => {
  const context = React.createContext();
  const Provider = ({ children, initialState = {} }) => {
    const [state, setState] = useState(initialState);
    const immerSetState = updater => {
      // Update the store with the updater from old to next
      setState(old => {
        const next = immer(old, updater);
        return next;
      });
    };

    // Memoize the context value so it only updates when the state changes
    const contextValue = useMemo(() => [state, immerSetState], [state]);
    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  const useStore = () => useContext(context);

  return { Provider, useStore };
};

export default makeStore;