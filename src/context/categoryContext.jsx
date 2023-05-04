import React, { createContext, useContext, useCallback, useState } from 'react';

const CategoryContext = createContext({
  reloadListValue: false,
  setReload: value => {},
});

const CategoryProvider = ({ children }) => {
  const [reloadListValue, setReloadListValue] = useState(false);

  const setReload = useCallback(value => {
    setReloadListValue(value);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        reloadListValue,
        setReload,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be used within an CategoryProvider');
  }

  return context;
};

export { CategoryProvider, useCategory };
