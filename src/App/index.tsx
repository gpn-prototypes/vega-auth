import React from 'react';
import ReactDOM from 'react-dom';
import { Identity } from '@gpn-prototypes/vega-sdk';

import { App } from './App';

ReactDOM.render(<App identity={new Identity({ apiUrl: '/' })} />, document.getElementById('root'));
