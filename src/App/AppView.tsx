import React from 'react';
import { Root } from '@gpn-prototypes/vega-ui';

import { AuthPage } from '../pages/auth';

import './App.css';

export const AppView = (): React.ReactElement => {
  return (
    <Root defaultTheme="dark" className="Auth-App">
      <AuthPage />
    </Root>
  );
};
