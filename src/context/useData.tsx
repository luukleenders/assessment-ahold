import { createContext, useContext } from 'react';

interface ContextProps {
  userName: string;
}

const initialState: ContextProps = {
  userName: '',
};

export const DataContext = createContext<ContextProps>(initialState);

export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
}
