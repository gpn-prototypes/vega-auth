import React from 'react';
import { Root } from '@gpn-prototypes/vega-ui';

import { AuthPage } from '../pages/auth';

import './App.css';

export const AppView = (): React.ReactElement => {
  return (
    <Root defaultTheme="dark">
      <div className="App">
        <AuthPage />
      </div>
    </Root>
  );
};
