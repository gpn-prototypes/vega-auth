import React from 'react';
import { Root } from '@gpn-prototypes/vega-ui';

import { AuthPage } from '../pages/auth';
import { SnackbarProvider } from '../platform';

import './App.css';

export const AppView = (): React.ReactElement => {
  return (
    <Root defaultTheme="dark" className="Auth-App">
      <SnackbarProvider>
        <AuthPage />
      </SnackbarProvider>
    </Root>
  );
};
