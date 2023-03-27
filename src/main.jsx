import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
import { BrowserRouter as Router  } from 'react-router-dom'
import { AuthContextProvider } from './context/authContext'
import { ToastContainer } from 'react-toastify'

const queryclient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    }
  }
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <AuthContextProvider>
      <Router >
        <App />
      </Router>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
