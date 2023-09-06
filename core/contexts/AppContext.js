import { createContext, useContext, useState } from "react";
import { mergeAll } from "ramda";

export const AppContext = createContext({
  state: {},
});

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({});

  const handleSetState = (newState) => {
    setState(mergeAll([state, newState]));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState: handleSetState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = (prop, initialValue) => {
  const { state, setState } = useContext(AppContext);

  const value = state[prop] || initialValue;

  const setValue = (newValue) => {
    if (setState) {
      setState({
        [prop]: newValue,
      });
    }
  };

  return [value, setValue];
};
