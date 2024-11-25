/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, ReactNode, useContext } from 'react';

type UserContextProps = {
  name: string;
  age: number;
  changeName: (name: string) => void;
  changeAge: (age: number) => void;
};

type UserProvidedProps = {
  children: ReactNode;
} & UserContextProps;

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({
  name,
  changeAge,
  changeName,
  age,
  children,
}: UserProvidedProps) => {
  return (
    <UserContext.Provider value={{ name, age, changeAge, changeName }}>
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
