import React from 'react';

import { Notifications } from '../../../types/notifications';

import { AppContext } from './AppContext';

type AppProviderProps = {
  children: React.ReactNode;
  identity: unknown;
  notifications: Notifications;
};

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const { children, identity, notifications } = props;

  return <AppContext.Provider value={{ identity, notifications }}>{children}</AppContext.Provider>;
};
