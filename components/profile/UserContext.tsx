import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  username: string;
  handle: string;
  memberSince: string;
  followers: number;
  following: number;
  visitedLibraries: number;
  wantToVisitLibraries: number;
  trophies: number;
};

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const defaultUser: User = {
  username: 'Even C',
  handle: '@evenn',
  memberSince: 'April 2024',
  followers: 6,
  following: 10,
  visitedLibraries: 75,
  wantToVisitLibraries: 33,
  trophies: 8,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
