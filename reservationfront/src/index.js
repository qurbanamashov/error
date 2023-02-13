import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Route/Router';
import { RouterProvider } from "react-router-dom";
import "./Resset/resset.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

