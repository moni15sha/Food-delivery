import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from './context/StoreContext.jsx'
// import { createRoot } from 'react-dom/client'

//  const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>

  </BrowserRouter>


);
