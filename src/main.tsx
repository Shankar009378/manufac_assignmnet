import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './style.css';
import { App } from './App';
import { MantineProvider } from '@mantine/core';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);