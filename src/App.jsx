import React from "react";
import { AppRouter } from './routers/index';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './provider/app'

import './assets/App.css'

export const App = () => {

  return (
    <BrowserRouter>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
