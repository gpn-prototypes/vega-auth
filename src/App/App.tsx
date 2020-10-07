import React from 'react';

import { AppProvider } from '../platform/app-context';

import { AppView } from './AppView';

import './App.css';

type Props = {
  identity?: unknown;
};

export const App = (props: Props): React.ReactElement => {
  const { identity } = props;
  return (
    <AppProvider identity={identity}>
      <AppView />
    </AppProvider>
  );
};
