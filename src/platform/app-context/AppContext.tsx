import { createContext, useContext } from 'react';
import { AuthAPI } from '@vega/data/auth';

type AppContextType = {
  authAPI: AuthAPI;
};

export const AppContext = createContext<AppContextType>({
  authAPI: {
    isFetching: false,
    error: null,
    login: (): void => {},
    logout: (): void => {},
    getCurrentUser: (): void => {},
  },
});

export const useAppContext = (): AppContextType => useContext(AppContext);
