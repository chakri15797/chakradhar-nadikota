import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import '../src/index.css';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);