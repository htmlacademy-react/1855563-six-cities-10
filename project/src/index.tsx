import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  HOTELS_COUNT: [1,2,3,4,5],
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      hotelsCount={Setting.HOTELS_COUNT}
    />
  </React.StrictMode>,
);
