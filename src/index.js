import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
// import { StateProvider } from './utility/stateProvider';
// import reducer, { initialState } from './utility/reducer';
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <CoreLayout>
      <Routes />
    </CoreLayout>
    {/* </StateProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
