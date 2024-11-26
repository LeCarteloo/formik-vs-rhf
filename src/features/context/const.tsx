/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, ReactNode, useContext } from 'react';

const UserContext = createContext<{ name: string; age: number } | undefined>(
  undefined
);

export const UserProvider = ({
  name,
  age,
  children,
}: {
  name: string;
  age: number;
  children: ReactNode;
}) => {
  return (
    <UserContext.Provider value={{ name, age }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the context value
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
