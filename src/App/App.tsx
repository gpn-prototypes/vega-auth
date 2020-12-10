import React from 'react';

import { Notifications, Unsubscribe } from '../../types/notifications';
import { AppProvider } from '../platform';

import { AppView } from './AppView';

import './App.css';

export const noop = (): void => {};

type Props = {
  identity?: unknown;
  notifications?: Notifications;
};

export const App = (props: Props): React.ReactElement => {
  const { identity } = props;
  const notifications = props.notifications ?? {
    add: noop,
    remove: noop,
    subscribe: (): Unsubscribe => {
      return (): void => {};
    },
  };

  return (
    <AppProvider identity={identity} notifications={notifications}>
      <AppView />
    </AppProvider>
  );
};
