import '@mantine/core/styles.css';
import './style.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { MantineProvider } from '@mantine/core';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <MantineProvider>
    <App />
  </MantineProvider>
);