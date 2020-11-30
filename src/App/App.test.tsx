import React from 'react';
import { Identity } from '@gpn-prototypes/vega-sdk';
import { render } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  test('корректно рендерится', () => {
    const identity = new Identity({ apiUrl: '/api' });
    render(<App identity={identity} />);
  });
});
