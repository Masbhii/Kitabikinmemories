import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home.jsx'; // Pastikan path benar
import './index.css'; // Pastikan file CSS ada

console.log('Starting app...');

const container = document.getElementById('root');
console.log('Container:', container);

if (!container) {
  console.error('Root element not found!');
} else {
  const root = createRoot(container);
  console.log('Root created');
  
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
  console.log('Render complete');
}