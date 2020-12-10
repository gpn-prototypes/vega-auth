import { createContext, useContext } from 'react';

import { Notifications, Unsubscribe } from '../../../types/notifications';

export const noop = (): void => {};

type AppContextType = {
  identity: unknown;
  notifications: Notifications;
};

export const AppContext = createContext<AppContextType>({
  identity: () => {},
  notifications: {
    add: noop,
    remove: noop,
    subscribe: (): Unsubscribe => {
      return noop;
    },
  },
});

export const useAppContext = (): AppContextType => useContext(AppContext);
