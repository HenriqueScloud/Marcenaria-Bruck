import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './styles/index.scss'
//  DESCOMENTAR OS INDEX.SCSS PARA A CONFIGURAÇÃO GLOBAL E RESET DOS ESTILOS DO SITE 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
