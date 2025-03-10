import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import DepenseProvider from './context/DepenseContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DepenseProvider>
      <App />
    </DepenseProvider>
  </StrictMode>,
)
