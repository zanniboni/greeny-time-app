import React from 'react';

import { CategoryProvider } from './categoryContext';

export const AppProvider = ({ children }) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};
