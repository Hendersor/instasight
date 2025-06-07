import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.js'
import './styles/index.css'

const root = document.getElementById('root')

if(!root) {
  throw new Error('Root element not found')
}


ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
