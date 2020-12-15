import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

const identity = {
  auth: () => 'token',
  authSSO: () => new Promise(() => {}),
};

describe('App', () => {
  test('корректно рендерится', () => {
    render(<App identity={identity} />);
  });
});
