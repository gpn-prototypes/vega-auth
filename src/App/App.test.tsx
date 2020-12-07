import React from 'react';
import { render } from '@testing-library/react';

import { Unsubscribe } from '../../types/notifications';

import { App } from './App';

const noop = (): void => {};

const identity = {
  auth: () => 'token',
  authSSO: () => new Promise(() => {}),
};

const notifications = {
  add: noop,
  remove: noop,
  subscribe: (): Unsubscribe => {
    return (): void => {};
  },
};

describe('App', () => {
  test('корректно рендерится', () => {
    render(<App identity={identity} notifications={notifications} />);
  });
});
