import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.js'
import { ModalProvider } from './context/ModalContext.js'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}


ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light" />
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
