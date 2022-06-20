import React from "react";
import { AppRouter } from './routers/index';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './provider/app'

import './assets/App.css'

export const App = () => {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App;
