import React from 'react';
import { Loader, Root, useMount } from '@gpn-prototypes/vega-ui';
import { AuthPage } from '@vega/pages/auth';
import { useAppContext } from '@vega/platform/app-context';

import './App.css';

const testId = {
  loader: 'App:loader',
};

export const AppView = (): React.ReactElement => {
  const {
    authAPI: { isAuthorized, getCurrentUser, isFetching },
  } = useAppContext();

  useMount(() => {
    getCurrentUser();
  });

  const content = <AuthPage />;

  return (
    <Root defaultTheme="dark">
      <div className="App">
        {isAuthorized === undefined || isFetching ? (
          <Loader className="App__Loader" data-testid={testId.loader} />
        ) : (
          content
        )}
      </div>
    </Root>
  );
};
