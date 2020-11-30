import React from 'react';
import { Identity } from '@gpn-prototypes/vega-sdk';

import { AppProvider } from '../platform';

import { AppView } from './AppView';

import './App.css';

type Props = {
  identity: Identity;
};

export const App = (props: Props): React.ReactElement => {
  const { identity } = props;
  return (
    <AppProvider identity={identity}>
      <AppView />
    </AppProvider>
  );
};
