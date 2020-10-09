import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  test('корректно рендерится', () => {
    const identity = {
      getToken: () => 'token',
    };
    render(<App identity={identity} />);
  });
});
